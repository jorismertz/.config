#! /opt/homebrew/bin/fish

set -x TERM "xterm-256color"

set spotifyQuery $(spotify status)
set parsed $(string split "\n" $spotifyQuery)

set artist (string split ": " $parsed[2])[2]
set album (string split ": " $parsed[3])[2]
set track (string split ": " $parsed[4])[2]
set position (string split " / " (string split ": " $parsed[5])[2])

switch $parsed[1]
    case "*paused*"
        set playingstatus paused
    case "*playing*"
        set playingstatus playing
    case "*"
        set playingstatus error
end

echo "{"
echo '"status": "'$playingstatus'",'
echo '"artist": "'$artist'",'
echo '"album": "'$album'",'
echo '"track": "'$track'",'
echo '"position": ["'$position[1]'", "'$position[2]'"]'
echo "}"