#!/bin/sh

printf '<!doctype html><meta charset=utf-8><head>'
printf '<title>Volcano Drop</title>'
printf '<style>'
cat app.css
printf '</style></head>'
printf '</head><body>'
printf '<body><canvas width="1024" height="768"></canvas><div><label><input type="checkbox" id="music" checked/> Music</label><div>'

if [ "$1" = "-d" ]
then
    printf '<script src="app.js"></script>'
else
    printf '<script>'
    cat app.min.js
    printf '</script>'
fi
printf '</body>'

