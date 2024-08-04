const test = require('node:test');
const assert = require('assert');

const parseMetaOpt = require('./parse-meta-opt');

test('parseMetaOpt - return a key value pair', () => {
  const opt = 'foo=bar';

  const actual = parseMetaOpt(opt);
  const expected = {foo: 'bar'};

  assert.deepStrictEqual(actual, expected);
});

test('parseMetaOpt - set value to true for a key with no value', () => {
  const opt = 'foo';

  const actual = parseMetaOpt(opt);
  const expected = {foo: true};

  assert.deepStrictEqual(actual, expected);
});

test('parseMetaOpt - handle spaces in the value', () => {
  const opt = 'foo=bar baz';

  const actual = parseMetaOpt(opt);
  const expected = {foo: 'bar baz'};

  assert.deepStrictEqual(actual, expected);
});
