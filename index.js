var isArray = require('isarray');

module.exports = Array.isNotArray || function (arr) {
  return !isArray(arr);
};
