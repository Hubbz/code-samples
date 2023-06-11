import formatFileData from './formatFileData';
// Use mock data from Drupal.
import mockData from './data';

process.env.NEXT_PUBLIC_FILES_URL = '';

test('Builds image object', () => {
  const imageObj = formatFileData(mockData);

  expect(imageObj.src).toEqual('/sites/default/files/2021-03/lp-header-2.jpg');
  expect(imageObj.alt).toEqual('Website website on a tablet');
  expect(imageObj.width).toEqual(1600);
  expect(imageObj.height).toEqual(671);
  expect(imageObj.type).toEqual('image/jpeg');
});

test('Builds image object using an image style', () => {
  const imageObj = formatFileData(mockData, 'large', false);

  expect(imageObj.src).toEqual(
    '/sites/default/files/styles/large/public/2021-03/lp-header-2.jpg.webp?itok=9DT2mHto',
  );
  expect(imageObj.width).toEqual(480);
  expect(imageObj.height).toEqual(201);
});

test('Throws an error when incorrect image style is used', () => {
  expect(() => formatFileData(mockData, 'wrong_style')).toThrowError(
    'The imageStyle "wrong_style" does not exist. No image style applied.',
  );
});
