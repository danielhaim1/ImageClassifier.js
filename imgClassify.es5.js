function getNaturalDimensions(_ref) {
  var naturalWidth = _ref.naturalWidth,
    naturalHeight = _ref.naturalHeight;
  var width = naturalWidth;
  var height = naturalHeight;
  if (width && height) {
    return {
      width: width,
      height: height
    };
  } else {
    return {
      width: null,
      height: null
    };
  }
}

function getImageFormat(img) {
  var _getNaturalDimensions = getNaturalDimensions(img),
    width = _getNaturalDimensions.width,
    height = _getNaturalDimensions.height;
  if (width && height) {
    if (width > height) {
      return "landscape";
    } else if (width < height) {
      return "portrait";
    } else if (width === height) {
      return "square";
    } else {
      return null;
    }
  }
  return null;
}

function getImageSize(img) {
  var _getNaturalDimensions2 = getNaturalDimensions(img),
    width = _getNaturalDimensions2.width,
    height = _getNaturalDimensions2.height;
  if (width && height) {
    if (width > 1200 || height > 1200) {
      return "large";
    } else if (width > 600 || height > 600) {
      return "medium";
    } else if (width > 300 || height > 300) {
      return "small";
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function classifyImage(img) {
  var format = getImageFormat(img);
  var size = getImageSize(img);
  if (format && size) {
    return {
      format: format,
      size: size
    };
  } else {
    return null;
  }
}

function classifyImages(images) {
  if (Array.isArray(images)) {
    images.forEach(function (img) {
      var _classifyImage = classifyImage(img),
        format = _classifyImage.format,
        size = _classifyImage.size;
      img.classList.add("img-" + format);
      img.classList.add("img-" + size);
    });
  } else {
    return null;
  }
}
