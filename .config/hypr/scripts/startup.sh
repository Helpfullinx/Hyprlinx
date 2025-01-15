#!/bin/bash
waybar &
swaync &
/usr/libexec/polkit-gnome-authentication-agent-1 &

swww-daemon &
swww img "$HOME/.config/hypr/wallpapers/8.png" --transition-type simple --transition-duration 3 &
nm-applet
