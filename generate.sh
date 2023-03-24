#!/bin/bash

yarn run build

# Set the dimensions of the final strips
width=5000
height=100

# Set the number of rows and columns in each strip
rows=1
cols=50

# Create an array of the input image filenames
input_images=( $(ls ./build/images/*.png | sort -n) )

# Loop through the input images, processing 50 images at a time
for (( i=0; i<${#input_images[@]}; i+=50 )); do
    # Get the current batch of input images
    batch_images=( "${input_images[@]:i:50}" )

    # Set the output filename
    output_file="output-$((i/50+1)).png"

    # Use the convert command to merge the images
    convert "${batch_images[@]}" +append -background none -gravity center -extent ${width}x${height} "${output_file}"
done

# Merge the output strips into a final mosaic image
convert output-{1..50}.png -append -background none -gravity center -extent 5000x5000 preview.png
rm output-*.png
