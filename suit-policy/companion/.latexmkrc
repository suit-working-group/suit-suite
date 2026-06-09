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
# Auto-clean: after a successful build the PDF is at the directory root, so this
# removes the out/ temporaries and the stray synctex.gz next to the .tex. The
# final .pdf is preserved. Note: this also drops the incremental build cache
# (.fdb_latexmk/.bbl), so each build runs from scratch.
$success_cmd = 'rm -f out/%R.* %R.synctex.gz';
