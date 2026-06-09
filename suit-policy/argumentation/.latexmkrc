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
# Auto-clean: after a successful build the PDF is at the directory root, so this
# removes the out/ temporaries and the stray synctex.gz next to the .tex. The
# final .pdf is preserved. Note: this also drops the incremental build cache
# (.fdb_latexmk/.bbl), so each build runs from scratch.
$success_cmd = 'rm -f out/%R.* %R.synctex.gz';
