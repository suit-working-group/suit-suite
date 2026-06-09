# ============================================================================
# Configuration latexmk for the operational executive summary
# Sovereign University IT — Operational Executive Summary of the
# Technical Reference (Architecture and Migration)
# ============================================================================

use Cwd qw(abs_path getcwd);

# Compiler
$pdf_mode = 1;
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';
$biber = 'biber %O %S';

# Output directory: temporary files in out/, final PDF in this directory
$aux_dir = 'out';
$out_dir  = '.';

# Shared bibliography lives in ../../shared/ (single source of truth)
$ENV{'BIBINPUTS'} = '../../shared/:' . ($ENV{'BIBINPUTS'} || '');

# bib-modes.sty / gls-modes.sty live in ../../shared/
$ENV{'TEXINPUTS'} = '../../shared/:' . ($ENV{'TEXINPUTS'} || '');

$clean_ext = 'synctex.gz';
