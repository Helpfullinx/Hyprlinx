#!/bin/bash
wvkbd=$(pidof wvkbd-mobintl)
start="wvkbd-mobintl -L 300"

if [ "$wvkbd" == '' ]; then
    $start &
else 
    kill $wvkbd
fi