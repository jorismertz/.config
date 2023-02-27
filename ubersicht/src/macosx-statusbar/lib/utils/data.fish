#!  /opt/homebrew/bin/fish

set yabai /opt/homebrew/bin/yabai
set diskspace /usr/local/bin/diskspace

set systemInfo $(string split " " $(ps -A -o %cpu,%mem | awk '{ cpu += $1; mem += $2} END {print cpu , mem}'))
set cpuUsage $(top -l 1 | grep -E "^CPU" | grep -Eo '[^[:space:]]+%' | head -1 | sed s/\%/\/)

set memoryUsage $systemInfo[2]
set diskUsage $($diskspace -Hi)
set internetStatus $(curl -s -o /dev/null -w "%{http_code}" https://www.google.com)
set ssid  $(/System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -I | awk -F: '/ SSID/{print $2}')

set windowQuery $(/opt/homebrew/bin/yabai -m query --windows)
set spacesQuery $(/opt/homebrew/bin/yabai -m query --spaces)

echo '{'                                  \
        '"spacesQuery": ' $spacesQuery ,  \
        '"windowsQuery": ' $windowQuery , \
        '"systemInfoQuery": {'            \
            '"cpu": '$cpuUsage ,          \
            '"mem": '$memoryUsage ,       \
            '"disk": "'$diskUsage'"'      \
        '},'                              \
        '"ssid": "'$ssid'"'               \
     '}'