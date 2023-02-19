#!/bin/bash

# Thank you openai for rewriting this in bash

yabai="/opt/homebrew/bin/yabai"
diskspace="/usr/local/bin/diskspace"

systemInfo=$(ps -A -o %cpu,%mem | awk '{ cpu += $1; mem += $2} END {print cpu , mem}')
cpuUsage=$(top -l 1 | grep -E "^CPU" | grep -Eo '[^[:space:]]+%' | head -1 | sed s/\%/\/)

memoryUsage=$(echo $systemInfo | cut -d " " -f 2)
diskUsage="$($diskspace -Hi)"
internetStatus=$(curl -s -o /dev/null -w "%{http_code}" https://www.google.com)
ssid=$(/System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -I | awk -F: '/ SSID/{print $2}')

windowQuery="$($yabai -m query --windows)"
spacesQuery="$($yabai -m query --spaces)"

echo '{'                                  \
        '"spacesQuery": '"$spacesQuery"' ,'  \
        '"windowsQuery": '"$windowQuery"' ,' \
        '"systemInfoQuery": {'            \
            '"cpu": '"$cpuUsage"' ,'          \
            '"mem": '"$memoryUsage"' ,'       \
            '"disk": "'$diskUsage'"'      \
        '},'                              \
        '"ssid": "'$ssid'"'               \
     '}'