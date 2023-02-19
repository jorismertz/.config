#! /opt/homebrew/bin/fish

set config (cat ~/.config/scripts/home_assistant/dist/config.json)
set storeFile "/tmp/scene_change_store.temp"

set token (echo $config | jq .token | tr -d '"')
set scenes (echo $config | jq -c .names[] | tr -d '"')
set ip (echo $config | jq -r .ip)
set path api/logbook

set response (curl -X GET \
  -s -S  \
  -H "Authorization: Bearer $token" \
  -H "Content-Type: application/json" \
  $ip$path)

set parsed = (echo $response | jq -c '.[] | select( .context_domain == "scene" and .context_service == "turn_on" )')
set lastIndex (count $parsed)
set lastScene (echo $parsed[$lastIndex] | jq .name)
set sceneName (string lower (echo $lastScene | tr -d '"'))

set sceneIndex (contains -i $sceneName $scenes)

echo $sceneIndex > $storeFile