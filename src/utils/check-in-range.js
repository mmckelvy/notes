const { DateTime } = require('luxon');

const parseTimestamp = require('./parse-timestamp');
const parseRange = require('./parse-range');

module.exports = function checkInRange(ts, options) {
  const actual = parseTimestamp(ts);
  const duration = parseRange(options.range);
  const target = DateTime.now().minus(duration);

  return actual >= target;
};
