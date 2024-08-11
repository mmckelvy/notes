const checkInRange = require('../../utils/check-in-range');
const extractTimestamp = require('./extract-timestamp');

module.exports = function filterOnRange(note, options) {
  const ts = extractTimestamp(note);

  return checkInRange(ts, options);
};
