# ============================================================================
# Root latexmk configuration for the SUIT repository.
#
# Convention (see .claude/rules/latex-standards.md):
#   - all temporary/auxiliary files (.aux, .bcf, .bbl, .log, ...) go in out/
#   - the final PDF is produced directly at the document's directory root,
#     next to its .tex source (it is NOT copied out of out/)
#
# latexmk does NOT inherit a parent .latexmkrc, so every directory containing a
# .tex file MUST have its own .latexmkrc. Per-document .latexmkrc files may add
# a BIBINPUTS entry pointing at ../shared/ for the shared bibliography.
# ============================================================================

$pdf_mode = 1;            # build PDF via pdflatex

# Build each document in its own directory (so out/ and the final PDF land next
# to the .tex) even when latexmk is invoked from the repo root, e.g.
# `latexmk -pdf suit-policy/policy-EN.tex`.
$do_cd = 1;

# latexmk reads RC files only from the system, the user HOME and the
# invocation directory (not from the source-file directory). When building a
# sub-document from the repo root, the per-document .latexmkrc that points
# TEXINPUTS/BIBINPUTS at ../shared/ is therefore NOT read. We replicate that
# here so the shared .sty (bib-modes, gls-modes) and the shared .bib resolve
# whether the target lives one or two levels below the repo root.
$ENV{'TEXINPUTS'} = '../shared/:../../shared/:out:' . ($ENV{'TEXINPUTS'} || '');
$ENV{'BIBINPUTS'} = '../shared/:../../shared/:' . ($ENV{'BIBINPUTS'} || '');

# Do NOT hard-code -output-directory here: latexmk injects it from $aux_dir
# through %O.
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';

# biber for biblatex documents (harmless if a document uses bibtex instead).
$biber = 'biber %O %S';

$aux_dir = 'out';         # temp/aux files here
$out_dir = '.';           # final PDF stays at the project (document) root

# Clean the synctex artifact too on `latexmk -c`.
$clean_ext = 'synctex.gz';
# Auto-clean (opt-in): when SUIT_CLEAN=1 is set in the environment, a successful
# build removes the out/ temporaries and the stray synctex.gz (the final .pdf, at
# the directory root, is preserved). Without it, out/ is kept so rebuilds stay
# incremental.
$success_cmd = $ENV{'SUIT_CLEAN'} ? 'rm -f out/%R.* %R.synctex.gz' : '';
