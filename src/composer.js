/**
 * The function is named 'multiplyComposerNumbers', but our test
 * expects us to have something called 'multiply' exported instead.
 * Use Composer to rename references from 'multiplyComposerNumbers' to 'multiply'
 * across this file AND the usage files (composerUsageOne.js, composerUsageTwo.js).
 */
function multiply(a, b) {
    return a * b;
}
  
module.exports = { multiply };
  