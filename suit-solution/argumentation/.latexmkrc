# ============================================================================
# Configuration latexmk for the solution-layer argumentation module
# Sustainable University IT — Technical/Operational Objections and Responses
# (defends the Technical Reference: solution-EN.tex)
# ============================================================================

use Cwd qw(abs_path getcwd);

# Compiler
$pdf_mode = 1;
$pdflatex = 'pdflatex -synctex=1 -interaction=nonstopmode %O %S';
$biber = 'biber %O %S';

# Output directory: temporary/aux files in out/, final PDF in this directory
$aux_dir = 'out';
$out_dir  = '.';

# Shared bibliography lives in ../../shared/ (single source of truth).
# A suit-consolidated.bib symlink in this directory also points there, so the
# document can \addbibresource{suit-consolidated.bib} like the rest of the suite.
$ENV{'BIBINPUTS'} = '../../shared/:' . ($ENV{'BIBINPUTS'} || '');

# bib-modes.sty / gls-modes.sty live in ../../shared/
$ENV{'TEXINPUTS'} = '../../shared/:' . ($ENV{'TEXINPUTS'} || '');

$clean_ext = 'synctex.gz';
# Auto-clean (opt-in): when SUIT_CLEAN=1 is set in the environment, a successful
# build removes the out/ temporaries and the stray synctex.gz (the final .pdf, at
# the directory root, is preserved). Without it, out/ is kept so rebuilds stay
# incremental.
$success_cmd = $ENV{'SUIT_CLEAN'} ? 'rm -f out/%R.* %R.synctex.gz' : '';
