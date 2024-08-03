const { DateTime } = require('luxon');

module.exports = function checkStart(line) {
  const s = line[0];
  const ts = line.slice(2);
  const dtISO = DateTime.fromISO(ts);
  const dtSQL = DateTime.fromSQL(ts);

  if (s === '#' && (dtISO.isValid || dtSQL.isValid)) {
    return true;
  }

  return false;
};
