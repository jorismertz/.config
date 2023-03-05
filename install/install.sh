#!/bin/sh

# Install xcode command line tools
xcode-select --install
# Symlink gitconfig into place
ln -s "$home/.config/.gitconfig" ~/.gitconfig

# Install Homebrew and install all packages listed in brewfile
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew bundle --file ~/.config/Brewfile

# Set mac defaults
sh ~/.config/install/mac-defaults.sh