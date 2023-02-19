function setgap 
    if test $argv[1] = "auto"
        sh ~/.config/scripts/autoGapAdjust.sh
        end
    if test $argv[1] = "disable"
        fish ~/.config/scripts/disablegap.fish
        end
    if test $argv[1] = "enable"
        fish ~/.config/scripts/enablegap.fish   
        end
end