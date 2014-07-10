#!/bin/bash

#return 0 if works
#return 2 if incorrect usage
#TODO return greater than 0 if doesnt works

DIRECTORY="Music"


if [[ "$#" -lt 1 ]]; then
    echo "usage: <file_with_youtube_link>"
    exit 2
fi


#if youtube-dl is not installed
hash youtube-dl 2>/dev/null || { 
    sudo apt-get install youtube-dl
}

if [ ! -d "$DIRECTORY" ]; then
    mkdir $DIRECTORY
fi


while read link; do
    pushd $DIRECTORY
    youtube-dl --extract-audio --audio-format mp3 $link 
    popd
done < $1 

exit 0
