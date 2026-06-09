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
# Auto-clean (opt-in): when SUIT_CLEAN=1 is set in the environment, a successful
# build removes the out/ temporaries and the stray synctex.gz (the final .pdf, at
# the directory root, is preserved). Without it, out/ is kept so rebuilds stay
# incremental.
$success_cmd = $ENV{'SUIT_CLEAN'} ? 'rm -f out/%R.* %R.synctex.gz' : '';
