@echo off

rem ------------REQUIREMENTS------------
rem Requires git and npm to be installed.
rem Windows is needed obviously, because
rem this is a batch script.
rem This script does NOT commit automatically,
rem you have to do that yourself.

cls

echo Before running, make sure to commit your changes.
echo    ^< Press any key to continue ^>
pause > nul

cls

echo Cleaning up
del /q /s "..\temp-built-site" > nul

echo Switching branch
call git checkout master

echo Building
call npm install
call npm run build

echo Copying to temp folder
xcopy ".\public" "..\temp-built-site\" /s /y /q > nul

echo Switching branch
call git checkout build

echo Copying from temp folder
xcopy "..\temp-built-site" ".\" /s /y /q > nul

echo Cleaning up
del /q /s "..\temp-built-site" > nul

echo.
echo Done. Commit, push and it's done!
echo    ^< Press any key to exit ^>

pause > nul