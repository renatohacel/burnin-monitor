@echo off
setlocal enabledelayedexpansion

for %%i in (1 2 3 4 5 6) do (
    for %%j in (A B C D E F G H) do (
        set "filename=%%i%%j.json"
        (
            echo [
            set "first=true"
            for /L %%k in (1,1,40) do (
                set /A num=%%k
                if !num! LSS 10 (
                    set "tester=%%i%%j-0!num!"
                ) else (
                    set "tester=%%i%%j-!num!"
                )

                rem Determinar el estado basado en el número
                if !num! EQU 10 (
                    set "status=poweroff"
                ) else if !num! EQU 15 (
                    set "status=rsp"
                ) else if !num! EQU 16 (
                    set "status=poweroff"
                ) else if !num! EQU 17 (
                    set "status=rsp"
                ) else if !num! EQU 18 (
                    set "status=poweroff"
                ) else if !num! EQU 21 (
                    set "status=alert"
                ) else if !num! EQU 22 (
                    set "status=poweroff"
                ) else if !num! EQU 26 (
                    set "status=poweroff"
                ) else if !num! EQU 29 (
                    set "status=alert"
                ) else if !num! EQU 30 (
                    set "status=alert"
                ) else if !num! EQU 31 (
                    set "status=alert"
                ) else if !num! EQU 33 (
                    set "status=alert"
                ) else if !num! EQU 36 (
                    set "status=diferent"
                ) else if !num! EQU 40 (
                    set "status=alert"
                ) else (
                    set "status=run"
                )

                if "!first!"=="true" (
                    set "first=false"
                    echo     { "tester": "!tester!", "status": "!status!" }
                ) else (
                    echo     ,{ "tester": "!tester!", "status": "!status!" }
                )
            )
            echo ]
        ) > !filename!
    )
)

echo Archivos creados exitosamente con contenido específico.
