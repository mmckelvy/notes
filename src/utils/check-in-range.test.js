const assert = require('assert');
const test = require('node:test');

const { DateTime } = require('luxon');

const checkInRange = require('./check-in-range');

test('checkInRange - return true for a timestamp in range', () => {
  const ts = DateTime.now().minus({days: 2}).toISO();
  const options = {
    range: '1 week'
  };

  const actual = checkInRange(ts, options);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('checkInRange - return false for a timestamp out of range', () => {
  const ts = DateTime.now().minus({days: 100}).toISO();
  const options = {
    range: '1 week'
  };

  const actual = checkInRange(ts, options);
  const expected = false;

  assert.strictEqual(actual, expected);
});

test('checkInRange - return false for a timestamp out of range', () => {
  const ts = DateTime.now().minus({days: 100}).toISO();
  const options = {
    range: '1 week'
  };

  const actual = checkInRange(ts, options);
  const expected = false;

  assert.strictEqual(actual, expected);
});
