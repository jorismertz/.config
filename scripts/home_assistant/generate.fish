#! /opt/homebrew/bin/fish

rm -rf ./dist
mkdir ./dist

deno run --allow-all ./utils/generateJson.ts

for function in ./functions/*.ts
    set splitName $(string split "/" $(string split "." $function))
    set newName $splitName[4]
    deno compile --allow-all $function -o $newName
    mv $newName ./dist
    
end

cd functions 
for function in *.fish
    cp $function ../dist
    echo Function:  $function
    chmod +x ../dist/$function
end
