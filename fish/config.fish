
set -U fish_greeting ""

fish_add_path /opt/homebrew/sbin
fish_add_path /opt/homebrew/bin
fish_add_path /Users/jorismertz/.spicetify

export FZF_DEFAULT_COMMAND="fd --type directory --no-ignore --base-directory ~/projects/"

# Aliases
alias cat "bat -pp"
alias rmf "rm -rf"
alias nvm "bass source /opt/homebrew/Cellar/nvm/0.39.3/nvm.sh --no-use ';' nvm"
alias s "kitty +kitten ssh"
alias vim nvim
alias cs z

# Quick project folder fuzzy finder shortcut
bind \cs 'cd ~/projects/$(/opt/homebrew/bin/fd --type directory --no-ignore --exclude node_modules --max-depth 14 --base-directory ~/projects/ | /opt/homebrew/bin/fzf); commandline -f repaint'
bind \ca 'cd $(/opt/homebrew/bin/fd --type directory --hidden --exclude node_modules | /opt/homebrew/bin/fzf); commandline -f repaint'

# starship init fish | source
zoxide init fish | source

# Macos keeps resetting my wallpaper so this will do for now.
# osascript -e 'tell application "System Events" to tell every desktop to set picture to "/Users/jorismertz/wallpapers/vibrant-monterey.tiff"'

# pnpm
set -gx PNPM_HOME /Users/jorismertz/Library/pnpm
set -gx PATH "$PNPM_HOME" $PATH
# pnpm end

set -g scripts ~/.config/scripts

if status is-interactive
    # cd ~/projects/2023
    # ~/.config/scripts/brew-auto-update-checker
end
