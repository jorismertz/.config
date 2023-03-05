#!/bin/sh

# Dock
defaults write com.apple.dock "show-recents" -bool "false"
defaults write com.apple.dock "orientation" -string "right"
defaults write com.apple.dock "autohide" -bool "true"
defaults write com.apple.dock autohide-time-modifier -int 0
defaults write com.apple.dock autohide-delay -float 0
killall Dock

# Finder
defaults write com.apple.finder "AppleShowAllFiles" -bool "true"
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "true"
defaults write com.apple.finder "ShowPathbar" -bool "true"
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "false"

# Desktop
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "false"
defaults write com.apple.finder "ShowExternalHardDrivesOnDesktop" -bool "false"

# Mission control
defaults write com.apple.dock "mru-spaces" -bool "false"
killall Dock

# Disable the sound effects on boot
sudo nvram SystemAudioVolume=" "