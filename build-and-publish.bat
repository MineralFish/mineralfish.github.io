@echo off

rem Build this site and copy it to the build branch. Also push it. Requires git to be installed

cls

del /q "..\temp-built-site"

echo Switching branch
git checkout master
echo Installing dependencies
npm install
echo Building
npm run build

md "..\temp-built-site"

echo Copying to temp folder
xcopy /s ".\public" "..\temp-built-site\" > nul

echo Switching branch
git checkout build

echo Copying from temp folder
xcopy /s "..\temp-built-site" ".\"

del /q "../temp-built-site"

echo Switching branch
git checkout master

echo Done. Switch to the build branch, commit and push.
pause > nul