:: @fileoverview runSimpleServer.bat runs a simple node web server
@echo off
clear
setlocal
cd ./server
start node simpleServer.js -webroot "../../public"
endlocal
