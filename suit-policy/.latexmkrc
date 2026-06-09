# ============================================================================
# Configuration latexmk for book assembly
# ============================================================================

use Cwd qw(abs_path getcwd);

# Compiler
$pdf_mode = 1;
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';
$biber = 'biber %O %S';

# Output directory
$aux_dir = 'out';
$out_dir  = '.';

# BibTeX needs to find the shared .bib in ../shared/
$ENV{'BIBINPUTS'} = '../shared/:' . ($ENV{'BIBINPUTS'} || '');

# bib-modes.sty / gls-modes.sty live in ../shared/; 'out' on the path lets the
# end-of-document \@@input\jobname.aux resolve on a cold (from-scratch) build
$ENV{'TEXINPUTS'} = '../shared/:out:' . ($ENV{'TEXINPUTS'} || '');
# Auto-clean: after a successful build the PDF is at the directory root, so this
# removes the out/ temporaries and the stray synctex.gz next to the .tex. The
# final .pdf is preserved. Note: this also drops the incremental build cache
# (.fdb_latexmk/.bbl), so each build runs from scratch.
$success_cmd = 'rm -f out/%R.* %R.synctex.gz';
