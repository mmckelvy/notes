const test = require('node:test');
const assert = require('assert');

const checkMetaMatch = require('./check-meta-match');

test('checkMetaMatch - match key only', () => {
  const opt = {foo: true};
  const metaLines = [
    'Foo: Bar',
    'Topic: Marine biology',
    'Tags: whales, fish, ocean'
  ];

  const actual = checkMetaMatch(opt);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('checkMetaMatch - match key and exact value', () => {
  const opt = {foo: 'bar'};
  const metaLines = [
    'Foo: Bar',
    'Topic: Marine biology',
    'Tags: whales, fish, ocean'
  ];

  const actual = checkMetaMatch(opt);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('checkMetaMatch - return false if the key does not match', () => {
  const opt = {bar: 'baz'};
  const metaLines = [
    'Foo: Bar',
    'Topic: Marine biology',
    'Tags: whales, fish, ocean'
  ];

  const actual = checkMetaMatch(opt);
  const expected = false;

  assert.strictEqual(actual, expected);
});

test('checkMetaMatch - Match a tag', () => {
  const opt = {tag: 'fish'};
  const metaLines = [
    'Foo: Bar',
    'Topic: Marine biology',
    'Tags: whales, fish, ocean'
  ];

  const actual = checkMetaMatch(opt);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('checkMetaMatch - Return true for a fuzzy match', () => {
  const opt = {tag: 'oceans'};
  const metaLines = [
    'Foo: Bar',
    'Topic: Marine biology',
    'Tags: whales, fish, ocean'
  ];

  const actual = checkMetaMatch(opt);
  const expected = true;

  assert.strictEqual(actual, expected);
});
