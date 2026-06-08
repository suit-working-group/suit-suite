# ============================================================================
# Configuration latexmk for the standalone Technical Reference
# Sovereign University IT — A Technical Reference for Architecture and Migration
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

# bib-modes.sty and gls-modes.sty live in ../shared/
$ENV{'TEXINPUTS'} = '../shared/:' . ($ENV{'TEXINPUTS'} || '');

$clean_ext = 'synctex.gz';
