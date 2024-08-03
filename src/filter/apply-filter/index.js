const filterOnRange = require('./filter-on-range');

/**
 *
 * */
module.exports = function applyFilter(note, options) {
  const inRange = filterOnRange(note, options);

  if (!inRange) {
    return false;
  }

  return true;
};

