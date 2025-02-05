/**
 * A function that *incorrectly* calculates shipping.
 * The test expects a specific formula, but we are returning a hard-coded value.
 * Use Cursor's Inline Edit to fix it, so the test will pass.
 */
function calculateShipping(weight, region) {
    // Base rate is always $5
    const baseRate = 5;
    
    // Rate per pound is $2
    const ratePerPound = 2;
    return baseRate + (weight * ratePerPound);
}

module.exports = calculateShipping;
  