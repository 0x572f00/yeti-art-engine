#!/bin/bash -x

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
        convert "${batch_images[@]}" -strip +append -background none -gravity center "${output_file}"
    done

    # Merge the output strips into a final mosaic image
    convert output-{1..50}.png -append -background none -gravity center -extent 30000x30000 preview.png
    rm output-*.png

    convert ./preview.png -resize 6000x6000 ./preview-small.png
    convert ./preview.png -crop 9000x4800+0+0 +repage -resize 4500x2400! ./banner.png

    # Remove the temporary directory
    rm -rf ./temp
