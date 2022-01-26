@echo off

rem ------------REQUIREMENTS------------
rem Requires git and npm to be installed.
rem Windows is needed obviously, because
rem this is a batch script.
rem This script does NOT commit automatically,
rem you have to do that yourself.

cls

del /q "..\temp-built-site"

git checkout master

call npm install
call npm run build

xcopy /s ".\public" "..\temp-built-site\"

git checkout build

xcopy /s "..\temp-built-site" ".\"

echo Done. Commit, pull and it's done!
pause > nul
