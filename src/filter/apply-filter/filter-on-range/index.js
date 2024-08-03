const { DateTime } = require('luxon');

const parseRange = require('./parse-range');

module.exports = function filterOnRange(note, options) {
  const [ firstLine ] = note;

  // Get the timestamp.
  const ts = firstLine.slice(2);
  const actual = DateTime.fromISO(ts).isValid
    ? DateTime.fromISO(ts)
    : DateTime.fromSQL(ts)
  ;


  // convert the range to a duration
  const duration = parseRange(options.range);
  const target = DateTime.now().minus(duration);

  return actual >= target;
};
