# ============================================================================
# Configuration latexmk for the policy-layer argumentation module (standalone)
# ============================================================================

use Cwd qw(abs_path getcwd);

$pdf_mode = 1;
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';
$biber = 'biber %O %S';
$aux_dir = 'out';
$out_dir  = '.';
$clean_ext = 'synctex.gz';

# Shared bibliography lives in ../../shared/ (single source of truth)
$ENV{'BIBINPUTS'} = '../../shared/:' . ($ENV{'BIBINPUTS'} || '');

# bib-modes.sty / gls-modes.sty and glossary-defs.tex live in ../../shared/;
# 'out' on the path lets the end-of-document \@@input\jobname.aux resolve on a
# cold (from-scratch) build.
$ENV{'TEXINPUTS'} = '../../shared/:out:' . ($ENV{'TEXINPUTS'} || '');
