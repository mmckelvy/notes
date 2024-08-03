const { Duration } = require('luxon');

module.exports = function parseRange(range) {
  const unitMapping = {
    minute: 'minutes',
    minutes: 'minutes',
    hour: 'hour',
    hours: 'hours',
    day: 'days',
    days: 'days',
    week: 'weeks',
    weeks: 'weeks',
    month: 'months',
    months: 'months',
    year: 'years',
    years: 'years'
  };

  const [ val, unit ] = range.split(' ');
  const luxonUnit = unitMapping[unit.toLowerCase()];

  if (!luxonUnit) {
    throw new Error('Unsupported duration unit');
  }

  return Duration.fromObject({
    [luxonUnit]: parseInt(val, 10)
  });
};
