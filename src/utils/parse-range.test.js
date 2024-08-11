const assert = require('assert');
const test = require('node:test');

const { Duration } = require('luxon');

const parseRange = require('./parse-range');

test('parseRange - parse "1 week" correctly', () => {
  const duration = parseRange("1 week");
  assert.deepStrictEqual(duration.toObject(), { weeks: 1 });
});

test('parseRange - parse "2 days" correctly', () => {
  const duration = parseRange("2 days");
  assert.deepStrictEqual(duration.toObject(), { days: 2 });
});

test('parseRange - parse "3 hours" correctly', () => {
  const duration = parseRange("3 hours");
  assert.deepStrictEqual(duration.toObject(), { hours: 3 });
});

test('parseRange - parse "4 minutes" correctly', () => {
  const duration = parseRange("4 minutes");
  assert.deepStrictEqual(duration.toObject(), { minutes: 4 });
});

test('parseRange - throw an error for unsupported units', () => {
  assert.throws(() => parseRange("1 fortnight"), /Unsupported duration unit/);
});

test('parseRange - throw an error for invalid format', () => {
  assert.throws(() => parseRange("week 1"), /Unsupported duration unit/);
});
