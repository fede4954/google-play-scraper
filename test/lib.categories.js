'use strict';

// FIXME disabled since currently doesn't work
// const assert = require('chai').assert;
// const gplay = require('../index');
// const R = require('ramda');
//
// // FIXME skipping as this is behaving erratically (and it's not a fundamental function)
// describe('Categories method', () => {
//   it('should fetch valid list of categories', () => {
//     return gplay.categories().then(categories => {
//       assert.isArray(categories);
//       assert.isTrue(categories.length > 0);
//     });
//   });
//
//   it('should have all categories from constant list of categories', () => {
//     return gplay.categories().then(categories => {
//       const categoriesConst = Object.keys(gplay.category);
//       assert.deepEqual(
//         R.difference(categories, categoriesConst),
//         [],
//         'Google Play has categories that are not in "category" constant'
//       );
//       assert.deepEqual(
//         R.difference(categoriesConst, categories),
//         [],
//         'There are some categories in the constant that were removed from Play Store'
//       );
//     });
//   });
// });
