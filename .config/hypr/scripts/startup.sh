#!/bin/bash
waybar &

swww-daemon &&
swww img "$HOME/.config/hypr/wallpapers/4.gif" --transition-type grow --transition-pos "$(hyprctl cursorpos)" --transition-duration 3