#!/bin/bash
waybar &
swaync &
soteria &

swww-daemon &
swww img "$HOME/.config/hypr/wallpapers/8.png" --transition-type simple --transition-duration 3 &
nm-applet
