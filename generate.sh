#!/bin/bash

# Run the build command and capture the exit code
echo "Running build command..."
yarn run build
build_exit_code=$?

# Only continue if the build command was successful
if [ $build_exit_code -eq 0 ]; then

    cp -f ./1-1/images/*.png ./build/images/

    # Create a temporary directory to work with
    echo "Creating temporary directory..."
    mkdir ./temp

    # Copy the images and JSON files to the temporary directory
    echo "Copying images and JSON files to temporary directory..."
    cp ./build/images/*.png ./temp/
    cp ./build/json/*.json ./temp/

    # Create arrays of the image and JSON filenames in the temporary directory
    echo "Creating arrays of image and JSON filenames in temporary directory..."
    images=(./temp/*.png)
    json=(./temp/*.json)

    # Shuffle the arrays of image and JSON filenames randomly using the Durstenfeld shuffle
    echo "Shuffling arrays of image and JSON filenames randomly..."
    for ((i=$((${#images[@]}-1));i>0;i--)); do
        j=$(($RANDOM % (i+1)))
        tmp="${images[$i]}"
        images[$i]="${images[$j]}"
        images[$j]="$tmp"
        tmp="${json[$i]}"
        json[$i]="${json[$j]}"
        json[$j]="$tmp"
    done

    # Loop through the shuffled array and rename the files in the temporary directory
    echo "Renaming files in the temporary directory..."
    for (( i=0; i<${#images[@]}; i++ )); do
        # Get the new filename for the image
        new_image_name=$((i+1))
        # Rename the image file
        cp "${images[$i]}" "./temp/$new_image_name.png"
        # Rename the corresponding JSON file
        cp "${json[$i]}" "./temp/$new_image_name.json"
    done

    # Copy the shuffled files from the temporary directory back to the build directories
    echo "Copying shuffled files back to build directories..."
    cp ./temp/*.png ./build/images/
    cp ./temp/*.json ./build/json/

    # Set the dimensions of the final strips
    width=30000
    height=600

    # Set the number of rows and columns in each strip
    rows=1
    cols=50

    # Create an array of the input image filenames
    echo "Creating array of input image filenames..."
    input_images=( $(ls ./build/images/*.png | sort -n) )

    # Loop through the input images, processing 50 images at a time
    echo "Processing input images..."
    for (( i=0; i<${#input_images[@]}; i+=50 )); do
        # Get the current batch of input images
        batch_images=( "${input_images[@]:i:50}" )

        # Set the output filename
        output_file="output-$((i/50+1)).png"

        # Use the convert command to merge the images
        echo "Merging images with convert command..."
        timeout 5m convert "${batch_images[@]}" -strip +append -background none -gravity center -extent ${width}x${height} "${output_file}"
    done

    # Merge the output strips into a final mosaic image
    convert output-{1..50}.png -append -background none -gravity center -extent 30000x30000 preview.png
    rm output-*.png

    convert ./preview.png -resize 6000x6000 ./preview-small.png
    convert ./preview.png -crop 9000x4800+0+0 +repage -resize 4500x2400! ./banner.png

    # Remove the temporary directory
    rm -rf ./temp

else
    echo "Build failed with exit code: $build_exit_code"
fi
