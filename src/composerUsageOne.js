/**
 * This file references the function in composer.js as 'multiply'.
 * We'll need to rename it if we want everything to match the test's expectation of 'multiply'.
 */
const { multiply } = require('./composer');

function calculateRectangles(rectangles) {
  // Each rectangle has { width, height }
  return rectangles.map(({ width, height }) => multiply(width, height));
}

module.exports = calculateRectangles;
