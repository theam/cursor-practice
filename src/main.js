// App configuration constants
const APP_CONFIG = {
  name: "cursor-practice",
  version: "1.0.0",
};

/**
 * Returns basic information about the application.
 * @returns {Object} Object containing app name and version
 * @returns {string} returns.name - The name of the application
 * @returns {string} returns.version - The current version number
 */
function getAppInfo() {
  return { ...APP_CONFIG };
}

module.exports = getAppInfo;
