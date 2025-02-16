/**
 * A function that *incorrectly* calculates shipping.
 * The test expects a specific formula, but we are returning a hard-coded value.
 * Use Cursor's Inline Edit to fix it, so the test will pass.
 */
function calculateShipping(weight, region) {
    const baseCost = 5;
    const costPerWeightUnit = 2;
    let regionMultiplier = 1;

    if (region === 'US') {
        regionMultiplier = 1;
    } else if (region === 'EU') {
        regionMultiplier = 1.5;
    } else if (region === 'ASIA') {
        regionMultiplier = 2;
    }

    return baseCost + (costPerWeightUnit * weight * regionMultiplier);
}
  
  module.exports = calculateShipping;
  