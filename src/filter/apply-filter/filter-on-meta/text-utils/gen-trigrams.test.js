const test = require('node:test');
const assert = require('assert');

const genTrigrams = require('./gen-trigrams');

test('genTrigrams - return all trigrams', () => {
  const text = 'cat';
  const expected = new Set(['  c', ' ca', 'cat', 'at ']);
  const result = genTrigrams(text);
  assert.deepStrictEqual(result, expected);
});

test('genTrigrams - ensure no duplicates', () => {
  const text = 'aaaa';
  const expected = new Set(['  a', ' aa', 'aaa', 'aaa', 'aa ']);

  const result = genTrigrams(text);
  assert.deepStrictEqual(result, expected);
});
