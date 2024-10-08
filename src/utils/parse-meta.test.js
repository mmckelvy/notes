const assert = require('assert');
const test = require('node:test');

const parseMeta = require('./parse-meta');

test('parseMeta - return the appropriate meta', t => {
  const line = '| Subject: Foo';
  const actual = parseMeta(line);
  const expected = 'Subject: Foo';

  assert.strictEqual(actual, expected);
});

test('parseMeta - handle tables', t => {
  const line = '| Item | Count | Order';
  const actual = parseMeta(line);
  const expected = null;

  assert.strictEqual(actual, expected);
});

test('parseMeta - handle multi-word meta', t => {
  const line = '| Subject: Marine biology';
  const actual = parseMeta(line);
  const expected = 'Subject: Marine biology';

  assert.strictEqual(actual, expected);
});

test('parseMeta - handle tags', t => {
  const line = '| Tags: apple, orange, banana';
  const actual = parseMeta(line);
  const expected = 'Tags: apple, orange, banana';

  assert.strictEqual(actual, expected);
});

test('parseMeta - handle dashes and underscores', t => {
  const line = '| Tags: apple-pear, orange_pineapple, banana';
  const actual = parseMeta(line);
  const expected = 'Tags: apple-pear, orange_pineapple, banana';

  assert.strictEqual(actual, expected);
});
