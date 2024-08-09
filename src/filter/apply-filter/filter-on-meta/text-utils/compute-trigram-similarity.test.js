const test = require('node:test');
const assert = require('assert');

const computeTrigramSimilarity = require('./compute-trigram-similarity');

test('computeTrigramSimilarity - return 1 for identical words', () => {
  const text1 = 'apple';
  const text2 = 'apple';

  const actual = computeTrigramSimilarity(text1, text2);
  const expected = 1;

  assert.strictEqual(actual, expected);
});

test('computeTrigramSimilarity - return 0 for dissimilar words', () => {
  const text1 = 'apple';
  const text2 = 'zebra';

  const actual = computeTrigramSimilarity(text1, text2);
  const expected = 0;

  assert.strictEqual(actual, expected);
});

test('computeTrigramSimilarity - handle partial matches', () => {
  const text1 = 'apple';
  const text2 = 'apple pie';

  const actual = computeTrigramSimilarity(text1, text2);
  const expected = 0.6;

  assert.strictEqual(actual, expected);
});

test('computeTrigramSimilarity - handle distant matches', () => {
  const text1 = 'apple';
  const text2 = 'app store';

  const actual = computeTrigramSimilarity(text1, text2);
  const expected = 0.231;

  assert.strictEqual(actual, expected);
});

test('computeTrigramSimilarity - handle misspellings', () => {
  const text1 = 'apple';
  const text2 = 'appel';

  const actual = computeTrigramSimilarity(text1, text2);
  const expected = 0.333;

  assert.strictEqual(actual, expected);
});

test('computeTrigramSimilarity - handle numbers', () => {
  const text1 = '15';
  const text2 = '15';

  const actual = computeTrigramSimilarity(text1, text2);
  const expected = 1;

  assert.strictEqual(actual, expected);
});

test('computeTrigramSimilarity - ignore casing', () => {
  const text1 = 'foo';
  const text2 = 'Foo';

  const actual = computeTrigramSimilarity(text1, text2);
  const expected = 1;

  assert.strictEqual(actual, expected);
});
