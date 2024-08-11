const { DateTime } = require('luxon');

module.exports = function parseTimestamp(ts) {
  if (DateTime.fromISO(ts).isValid) {
    return DateTime.fromISO(ts);
  }

  if (DateTime.fromSQL(ts).isValid) {
    return DateTime.fromSQL(ts);
  }

  return null;
};
