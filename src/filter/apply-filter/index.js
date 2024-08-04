const filterOnRange = require('./filter-on-range');
const filterOnMeta = require('./filter-on-meta');

/**
 *
 * */
module.exports = function applyFilter(note, options) {
  if (options.range) {
    const inRange = filterOnRange(note, options);

    if (!inRange) {
      return false;
    }
  }

  if (options.meta) {
    const metaMatch = filterOnMeta(note, options);

    if (!metaMatch) {
      return false;
    }
  }

  return true;
};

