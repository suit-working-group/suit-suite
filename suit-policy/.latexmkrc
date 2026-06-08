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
