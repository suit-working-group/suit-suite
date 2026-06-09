# ============================================================================
# latexmk configuration for an instantiation's render wrappers.
# ----------------------------------------------------------------------------
# Each render/*.tex is a thin wrapper that \input's the generic document body
# from suit-policy/ or suit-solution/ and the shared modules from shared/. Those
# generic body files use BARE \input{chNN-...} / \input{main/...} that resolve
# against the MAIN FILE's directory, so we must put the generic source roots on
# TEXINPUTS for them (and the chapter files they pull in) to be found from here.
#
# Layout assumed (this file lives at instantiations/<institution>/render/):
#     ../../../shared/         shared .sty (bib-modes, gls-modes, localization),
#                              glossary, regulatory annex, the consolidated .bib
#     ../../../suit-policy/     generic Policy body + its sub-trees
#     ../../../suit-solution/   generic Solution body + its chapter files
#     ../../../categories/      Layer-1 archetypes (resolved via \catdir)
#     ../set.tex                this institution's Layer-2 set
#
# Temporary files go in out/; the final .pdf is produced next to the wrapper.
# ============================================================================

$pdf_mode = 1;
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';
$biber    = 'biber %O %S';

$aux_dir = 'out';
$out_dir = '.';

# Generic source roots + shared modules on the input path.
#
#   - The leading '.' MUST come first: the render wrappers share a basename
#     with the generic documents they wrap (e.g. solution-EN.tex), so the
#     CURRENT directory has to win when pdflatex resolves the main file —
#     otherwise it would pick up the generic ../../../suit-solution/solution-EN.tex.
#   - The generic source roots let the BARE \input{chNN-...} (Solution) and
#     \input{main/...} (Policy) inside the \input'd body files resolve. The
#     same entries also resolve the body files' own \input{../shared/...}
#     (e.g. ch33 -> ../shared/regulatory-applicability-EN): searched relative
#     to ../../../suit-solution/, '../shared' lands on ../../../shared.
#   - The TRAILING ':' appends kpathsea's default path so system classes,
#     packages and fonts still resolve.
$ENV{'TEXINPUTS'} =
    '.:'
  . '../../../shared/:'
  . '../../../suit-solution/:'
  . '../../../suit-policy/:'
  . '../../../suit-policy/main/:'
  . '../../../suit-policy/companion/:'
  . '../../../suit-policy/argumentation/:'
  . 'out:'
  . ($ENV{'TEXINPUTS'} ? $ENV{'TEXINPUTS'} . ':' : ':');

# The consolidated bibliography lives in shared/ (also symlinked into this dir).
$ENV{'BIBINPUTS'} =
    '.:../../../shared/:'
  . ($ENV{'BIBINPUTS'} ? $ENV{'BIBINPUTS'} . ':' : ':');

$clean_ext = 'synctex.gz';
# Auto-clean: after a successful build the PDF is at the directory root, so this
# removes the out/ temporaries and the stray synctex.gz next to the .tex. The
# final .pdf is preserved. Note: this also drops the incremental build cache
# (.fdb_latexmk/.bbl), so each build runs from scratch.
$success_cmd = 'rm -f out/%R.* %R.synctex.gz';
