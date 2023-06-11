/**
 * Check browser webp support.
 * @returns {boolean}
 */
let response;

const isWebpSupported = () => {
  // If this check has been run already exit early.
  if (typeof response !== 'undefined' && response) return response;

  // If document is available create a canvas element for testing.
  const elem = typeof document === 'object' ? document.createElement('canvas') : null;

  if (!elem) {
    // Could not create canvas.
    // Code probably ran server-side.
    // return true until can determine whether wepb is supported.
    return true;
  }

  // Check index for webp support.
  response = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;

  return response;
};

export default isWebpSupported;
