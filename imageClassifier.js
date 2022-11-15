/**
 * Return the natural dimensions of an image.
 * @string img - The image to get the dimensions of.
 * @return {object} - The natural width of the image.
 * @return {null} - If the image has no natural dimensions.
 */

 function getNaturalDimensions({ naturalWidth, naturalHeight }) {
    // get the image format from the src attribute.
    let width = naturalWidth;
    let height = naturalHeight;

    if (width && height) {
        // return the natural width and height of the image.
        return { width, height };
    } else {
        // return null if the image has no natural dimensions.
        return { width: null, height: null };
    }
}

/**
 * Return the format of an image.
 * @string img - The image to get the format of.
 * @return {string} - The format of the image.
 * @return {null} - If the image has no format.
 */

function getImageFormat(img) {
    // get the image format from the src attribute.
    const { width, height } = getNaturalDimensions(img);

    if (width && height) {
        if (width > height) {
            // return landscape if the width is greater than the height.
            return 'landscape';
        } else if (width < height) {
            // return portrait if width is less than height
            return 'portrait';
        } else if (width === height) {
            // return square if width and height are equal
            return 'square';
        } else {
            // return null if the image has no format.
            return null;
        }
    }

    return null;
}

/**
 * Return the size of the image in human readable format.
 * @string img - The image to get the size of.
 * @return {string} - The size of the image in human readable format.
 * @return {null} - If the image has no size.
 */

function getImageSize(img) {
    // get the natural dimensions of the image.
    const { width, height } = getNaturalDimensions(img);

    if (width && height) {
        if (width > 1200 || height > 1200) {
            // return large if the width or height is greater than 1200px.
            return 'large';
        } else if (width > 600 || height > 600) {
            // return medium if the width or height is greater than 600px.
            return 'medium';
        } else if (width > 300 || height > 300) {
            // return small if the width or height is greater than 300px.
            return 'small';
        } else {
            return null;
        }
    } else {
        // return null if the image has no size.
        return null;
    }
}

/**
 * Return both format and size of an image.
 * @string img - The image to get the format and size of.
 * @return {object} - The format and size of the image.
 * @return {null} - If the image has no format or size.
 */

function classifyImage(img) {
    // get the image format and size.
    const format = getImageFormat(img);
    const size = getImageSize(img);

    if (format && size) {
        // return the format and size of the image.
        return { format, size };
    } else {
        // return null if the image has no format or size.
        return null;
    }
}

/**
 * Add the format and size of an image to the class attribute.
 * @string {images} - The images to add the format and size to.
 * @return {null} - If the images are not an array.
*/

function classifyImages(images) {
    // check if the images are an array.
    if (Array.isArray(images)) {
        // loop through each image.
        images.forEach(img => {
            // get the image format and size.
            const { format, size } = classifyImage(img);

            // add the format and size to the class attribute.
            img.classList.add(`img-${format}`);
            img.classList.add(`img-${size}`);
        });
    } else {
        return null;
    }
}
