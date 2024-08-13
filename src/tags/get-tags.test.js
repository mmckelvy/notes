const assert = require('assert');
const test = require('node:test');

const getTags = require('./get-tags');

test('getTags - return a standard list of tags', () => {
  const meta = 'Tags: foo, bar, baz';
  const actual = getTags(meta);
  const expected = ['foo', 'bar', 'baz'];

  assert.deepStrictEqual(actual, expected);
});

test('getTags - return empty array for other meta', () => {
  const meta = 'Topic: Foo';
  const actual = getTags(meta);
  const expected = [];

  assert.deepStrictEqual(actual, expected);
});

test('getTags - handle single tag', () => {
  const meta = 'Tag: foo';
  const actual = getTags(meta);
  const expected = ['foo'];

  assert.deepStrictEqual(actual, expected);
});
