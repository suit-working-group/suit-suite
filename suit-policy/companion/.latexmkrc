# ============================================================================
# Configuration latexmk for companion document
# ============================================================================

use Cwd qw(abs_path getcwd);

$pdf_mode = 1;
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';
$biber = 'biber %O %S';
$aux_dir = 'out';
$out_dir  = '.';

# Shared bibliography lives in ../../shared/ (single source of truth)
$ENV{'BIBINPUTS'} = '../../shared/:' . ($ENV{'BIBINPUTS'} || '');

# bib-modes.sty / gls-modes.sty live in ../../shared/
$ENV{'TEXINPUTS'} = '../../shared/:' . ($ENV{'TEXINPUTS'} || '');

# xr-hyper imports section labels from the assembled policy book;
# ensure its .aux exists before compiling the standalone summary (avoids ?? on a cold build).
system('latexmk -cd -pdf "../policy-EN.tex"') unless -e '../out/policy-EN.aux';
