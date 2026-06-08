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

# Do NOT hard-code -output-directory here: latexmk injects it from $aux_dir
# through %O.
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';

# biber for biblatex documents (harmless if a document uses bibtex instead).
$biber = 'biber %O %S';

$aux_dir = 'out';         # temp/aux files here
$out_dir = '.';           # final PDF stays at the project (document) root

# Clean the synctex artifact too on `latexmk -c`.
$clean_ext = 'synctex.gz';
