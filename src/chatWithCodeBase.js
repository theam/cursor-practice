/**
 * Simple function you can chat about and refactor if desired.
 */
function addChatNumbers(a, b) {
    return a + b;
  }
  

  function processUserData(users) {
    return users
      .map(user => ({
        fullName: `${user.firstName} ${user.lastName}`,
        canDrink: user.age > 21,
        status: user.isActive ? "Active" : "Inactive",
        userType: user.points > 1000 ? "VIP" : "Regular"
      }))
      .sort((a, b) => a.fullName.localeCompare(b.fullName));
  }
  
  module.exports = { addChatNumbers, processUserData };
  