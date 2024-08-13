const assert = require('assert');
const test = require('node:test');

const checkStart = require('./check-start');

test('checkStart - return true for valid ISO date starting with "# "',
  () => {
    const validDateLine = '# 2023-08-03T12:00:00Z';
    assert.strictEqual(checkStart(validDateLine), true);
  }
);

test('checkStart - return false for invalid ISO date starting with "# "',
  () => {
    const invalidDateLine = '# invalid-date';
    assert.strictEqual(checkStart(invalidDateLine), false);
  }
);

test('checkStart - return false for valid ISO date not starting with "# "',
  () => {
    const validDateLineNoHash = '2023-08-03T12:00:00Z';
    assert.strictEqual(checkStart(validDateLineNoHash), false);
  }
);

test('checkStart - return false for invalid ISO date not starting with "# "',
  () => {
    const invalidDateLineNoHash = 'invalid-date';
    assert.strictEqual(checkStart(invalidDateLineNoHash), false);
  }
);

test('checkStart - return false for line with only "# "', () => {
  const noDateLine = '# ';
  assert.strictEqual(checkStart(noDateLine), false);
});

test('checkStart - return false for empty string', () => {
  const emptyString = '';
  assert.strictEqual(checkStart(emptyString), false);
});

test('checkStart - return true for valid SQL date starting with "# "',
  () => {
    const validDateLine = '# 2023-08-03 21:52';
    assert.strictEqual(checkStart(validDateLine), true);
  }
);
