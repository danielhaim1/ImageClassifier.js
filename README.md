# Image Classifier
The function converts an array of images and adds the format and size to the class attribute for each image, which is useful for styling images based on their format and size.

## Formats & Sizes
The format of the image is added to the class attribute as `img-[format]` and `img-[size]`.

Formats: `landscape`, `portrait`, `square`

The image dimensions are determined by the natural dimensions of the image and convereted to a human readable size to be used for styling purposes. The size is derived from the pixel size of the image, not the file size.

Sizes: `large`, `medium`, `small`

## Output:
```html
<img src="image.jpg" class="img-landscape img-large" />
<img src="image.jpg" class="img-portrait img-medium" />
<img src="image.jpg" class="img-square img-small" />
```

## Methods
```js
classifyImages(document.querySelectorAll('img'));
```

```js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    classifyImages(images);
});
```

```js
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    classifyImages(images);
}
```


## Functions

```js
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
```

```js
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
```

```js
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
```

```js
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
```

```js
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
```
