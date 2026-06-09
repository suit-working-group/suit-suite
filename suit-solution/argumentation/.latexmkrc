# ============================================================================
# Configuration latexmk for the solution-layer argumentation module
# Sovereign University IT — Technical/Operational Objections and Responses
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
# Auto-clean: after a successful build the PDF is at the directory root, so this
# removes the out/ temporaries and the stray synctex.gz next to the .tex. The
# final .pdf is preserved. Note: this also drops the incremental build cache
# (.fdb_latexmk/.bbl), so each build runs from scratch.
$success_cmd = 'rm -f out/%R.* %R.synctex.gz';
