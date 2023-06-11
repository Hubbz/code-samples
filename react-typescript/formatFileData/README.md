# formatFileData - React

Utility function for rendering an image coming from Drupal. You can specify a Drupal image style to use or use the `disableImageOptimization` prop to instead set the image src to the original image. It returns an object with image data.

In the Drupal configuration where this was used, all image styles were converting images to the `webp` format. An additional `isWebpSupported` utility function was used to determine if the browser supported webp images. If the browser did not, a `fallback` image style was used that converted the image to a png format.

## Usage

```js
const imageObj = formatFileData(imageData, 'featured_image');

return (
  <img
    src={imageObj?.src}
    alt={imageObj?.alt}
    height={imageObj?.height}
    width={imageObj?.width}
  />
);
```
