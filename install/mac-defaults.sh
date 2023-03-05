#!/bin/sh

# Remove annoying dock hide / show delay
defaults write com.apple.dock autohide-time-modifier -int 0
defaults write com.apple.dock autohide-delay -float 0
killall Dock

# Disable the sound effects on boot
sudo nvram SystemAudioVolume=" "

defaults write com.apple.dock autohide-time-modifier -int 0; defaults write com.apple.dock autohide-delay -float 0; killall Dock