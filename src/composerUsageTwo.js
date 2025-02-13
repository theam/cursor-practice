/**
 * Also references the same function from composer.js.
 */
const { multiply } = require("./composer");

function calculateVolumes(cubes) {
  // Each cube has { width, height, depth }
  // We'll multiply them to get volume
  return cubes.map(({ width, height, depth }) =>
    multiply(multiply(width, height), depth)
  );
}

module.exports = calculateVolumes;
