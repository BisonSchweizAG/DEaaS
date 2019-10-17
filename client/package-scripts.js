const globalAutoConfigurations = require('@bison/global-auto-configurations');

module.exports = {
  scripts: Object.assign({}, globalAutoConfigurations.packageScripts.scripts),
};
