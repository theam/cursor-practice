/**
 * A function that calculates shipping based on weight and region.
 * Currently only implements base formula as region-specific pricing
 * is not yet specified in tests.
 */
function calculateShipping(weight, region) {
  // Base shipping cost for all regions
  const baseCost = 5;
  const costPerWeight = 2;

  // Future enhancement: Add region-specific multipliers or rules here
  // Example:
  // const regionMultipliers = {
  //   'US': 1.0,
  //   'EU': 1.2,
  //   'ASIA': 1.5
  // };

  return baseCost + weight * costPerWeight;
}

module.exports = calculateShipping;
