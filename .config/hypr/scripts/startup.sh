#!/bin/bash
waybar -c $HOME/.config/waybar/config -s $HOME/.config/waybar/style.css

swww-daemon
swww img "$HOME/.config/hypr/wallpapers/1.png" --transition-type grow --transition-pos "$(hyprctl cursorpos)" --transition-duration 3
