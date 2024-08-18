const test = require('node:test');
const assert = require('node:assert');

const { DateTime } = require('luxon');

const applyFilter = require('./index');

test('applyFilter - return true for range and meta matches', () => {
  const ts = DateTime.now().minus({days: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Foo',
    '',
    'Here is a note about foo',
    '',
    '---'
  ];

  const options = {
    range: '1 week',
    meta: ['topic=foo'],
    sensitivity: 0.6
  };

  const actual = applyFilter(note, options);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return true for meta match', () => {
  const ts = DateTime.now().minus({days: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Bar',
    '',
    'Here is a note about foo',
    '',
    '---'
  ];

  const options = {
    meta: ['topic=bar'],
    sensitivity: 0.6
  };

  const actual = applyFilter(note, options);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return true for a range match', () => {
  const ts = DateTime.now().minus({days: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Bar',
    '',
    'Here is a note about foo',
    '',
    '---'
  ];

  const options = {
    range: '1 week',
    sensitivity: 0.6
  };

  const actual = applyFilter(note, options);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return false for a range miss', () => {
  const ts = DateTime.now().minus({days: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Bar',
    '',
    'Here is a note about foo',
    '',
    '---'
  ];

  const options = {
    range: '1 day',
    sensitivity: 0.6
  };

  const actual = applyFilter(note, options);
  const expected = false;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return false for a meta miss', () => {
  const ts = DateTime.now().minus({days: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Bar',
    '',
    'Here is a note about foo',
    '',
    '---'
  ];

  const options = {
    meta: ['topic=oceans'],
    sensitivity: 0.6
  };

  const actual = applyFilter(note, options);
  const expected = false;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return false for a meta and range miss', () => {
  const ts = DateTime.now().minus({weeks: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Bar',
    '',
    'Here is a note about foo',
    '',
    '---'
  ];

  const options = {
    range: '1 week',
    meta: ['topic=oceans'],
    sensitivity: 0.6
  };

  const actual = applyFilter(note, options);
  const expected = false;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return true for strict match', () => {
  const ts = DateTime.now().minus({weeks: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Oceans',
    '',
    'Here is a note about Oceans',
    '',
    '---'
  ];

  const options = {
    meta: ['topic=oceans'],
    sensitivity: 1
  };

  const actual = applyFilter(note, options);
  const expected = true;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return false for strict miss', () => {
  const ts = DateTime.now().minus({weeks: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Oceans',
    '',
    'Here is a note about Oceans',
    '',
    '---'
  ];

  const options = {
    meta: ['topic=ocean'],
    sensitivity: 1
  };

  const actual = applyFilter(note, options);
  const expected = false;

  assert.strictEqual(actual, expected);
});

test('applyFilter - return true for a matching tag', () => {
  const ts = DateTime.now().minus({weeks: 2}).toISO();

  const note = [
    `# ${ts}`,
    '| Topic: Oceans',
    '| Tags: whales',
    '',
    'Here is a note about Oceans',
    '',
    '---'
  ];

  const options = {
    meta: ['tag=whales'],
    sensitivity: 0.6
  };

  const actual = applyFilter(note, options);
  const expected = true;

  assert.strictEqual(actual, expected);
});
