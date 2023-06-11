import isWebpSupported from './isWebpSupported';

/**
 * Get an object of useful file information.
 *
 * @param file
 *   The file object.
 * @param imageStyle
 *   The Drupal image style machine name to use (entered as a string).
 *   See http://.../admin/config/media/image-styles for all image style options.
 * @param disableImageOptimization
 *   Use the image as it was uploaded without an image style (entered as a boolean).
 *
 * @returns {object}
 *   An object of file information.
 */
const formatFileData = (file, imageStyle, disableImageOptimization) => {
  if (file === undefined) {
    return file;
  }

  if (imageStyle && file.meta.derivatives[imageStyle] === undefined) {
    throw new Error(`The imageStyle "${imageStyle}" does not exist. No image style applied.`);
  }

  // Return an image object using an image style.
  if (imageStyle && file.meta.derivatives[imageStyle] !== undefined && !disableImageOptimization) {
    // If browser doesn't support webp image format, use the fallback image style instead.
    const imageStyleToUse = isWebpSupported() ? imageStyle : 'fallback';

    const obj = {
      src: process.env.NEXT_PUBLIC_FILES_URL + file.meta.derivatives[imageStyleToUse].url,
      alt: file.meta.alt,
      width: file.meta.derivatives[imageStyleToUse].width,
      height: file.meta.derivatives[imageStyleToUse].height,
      type: file.filemime,
    };

    return obj;
  } 

  // Return the image objecct without an image style.
  const obj = {
    src: process.env.NEXT_PUBLIC_FILES_URL + file.uri.url,
    alt: file.meta.alt,
    width: file.meta.width,
    height: file.meta.height,
    type: file.filemime,
  };

  return obj;
};

export default formatFileData;
