@echo off

rem Build this site and copy it to the build branch. Also push it. Requires git to be installed

cls

del "..\temp-built-site"

git checkout master
npm install
npm run build

md "..\temp-built-site"

xcopy /s ".\public" "..\temp-built-site\"

git checkout build

xcopy /s "..\temp-built-site" ".\"

del "../temp-built-site"

git checkout master

echo Done. Switch to the build branch, commit and push.
pause > nul