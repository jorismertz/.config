#!  /opt/homebrew/bin/fish

set yabai /opt/homebrew/bin/yabai
set diskspace /usr/local/bin/diskspace

set systemInfo $(string split " " $(ps -A -o %cpu,%mem | awk '{ cpu += $1; mem += $2} END {print cpu , mem}'))
set cpuUsage $(top -l 1 | grep -E "^CPU" | grep -Eo '[^[:space:]]+%' | head -1 | sed s/\%/\/)
set batteryPercentage $(pmset -g batt | grep -Eo "\d+%" | cut -d% -f1)
set memoryUsage $systemInfo[2]
set diskUsage $($diskspace -Hi)
set ssid  $(/System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -I | awk -F: '/ SSID/{print $2}')
set wallpaper_path $(osascript -e 'tell app "finder" to get posix path of (get desktop picture as alias)')
set windowQuery $(/opt/homebrew/bin/yabai -m query --windows)
set spacesQuery $(/opt/homebrew/bin/yabai -m query --spaces)
set displayQuery $(/opt/homebrew/bin/yabai -m query --displays)

echo '{'                                        \
        '"spacesQuery": ' $spacesQuery ,        \
        '"windowsQuery": ' $windowQuery ,       \
        '"displayQuery": ' $displayQuery ,      \
        '"systemInfoQuery": {'                  \
            '"battery": '$batteryPercentage','  \
            '"cpu": '$cpuUsage ,                \
            '"mem": '$memoryUsage ,             \
            '"disk": "'$diskUsage'"'            \
        '},'                                    \
        '"ssid": "'$ssid'",'                    \
        '"wallpaper_path": "'$wallpaper_path'"' \
     '}'