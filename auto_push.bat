@echo off
REM --- Auto Git Push Script for This Repo ---
cd /d "%~dp0"

:loop
REM Ignore itself via .gitignore
git add .

REM Only commit if there are staged changes
git diff --cached --quiet
IF %ERRORLEVEL% EQU 1 (
    git commit -m "Auto-commit: %date% %time%"
    git push
    echo Changes pushed at %time%
)

timeout /t 5 >nul
goto loop
