#!/bin/bash

# Loop through each JSON file in the ./build/json directory
for file in ./build/json/*.json
do
    sed -i 's/Background.genesis/Background/g' "$file"
    sed -i 's/Background.warm/Background/g' "$file"
    sed -i 's/Body.genesis/Body/g' "$file"
    sed -i 's/Body.oceanBlue/Body/g' "$file"
    sed -i 's/Body.purpleDino/Body/g' "$file"
    sed -i 's/Body.surgeGreen/Body/g' "$file"
    sed -i 's/Eyes.white/Eyes/g' "$file"
    sed -i 's/Eyes.oceanBlue/Eyes/g' "$file"
    sed -i 's/Eyes.purpleDino/Eyes/g' "$file"
    sed -i 's/Eyes.surgeGreen/Eyes/g' "$file"

    
    # Delete the "Shadow" trait
    # sed -i '/"trait_type": "Shadow",/,+2 d' "$file"
done