const test = require('node:test');
const assert = require('assert');

const checkForTodo = require('./check-for-todo');

// Define the test cases
test('checkForTodo - return true for an open todo without any options',
  () => {
    const line = '[ ] This is an open todo';
    assert.strictEqual(checkForTodo(line, {}), true);
  });

test('checkForTodo - return false for a completed todo without any options',
  () => {
    const line = '[x] This is a completed todo';
    assert.strictEqual(checkForTodo(line, {}), false);
  });

test('checkForTodo - return true for a completed todo with options.done',
  () => {
    const line = '[x] This is a completed todo';
    const options = { done: true };
    assert.strictEqual(checkForTodo(line, options), true);
  });

test('checkForTodo - return true for an open todo with options.all', () => {
  const line = '[ ] This is an open todo';
  const options = { all: true };
  assert.strictEqual(checkForTodo(line, options), true);
});

test('checkForTodo - return true for a completed todo with options.all',
  () => {
    const line = '[x] This is a completed todo';
    const options = { all: true };
    assert.strictEqual(checkForTodo(line, options), true);
  });

test('checkForTodo - return false for a line without a todo', () => {
  const line = 'This is just a regular line without a todo';
  assert.strictEqual(checkForTodo(line, {}), false);
});

test('checkForTodo - return false for an improperly formatted todo', () => {
  const line = '[?] This is not a proper todo format';
  assert.strictEqual(checkForTodo(line, {}), false);
});

test('checkForTodo - return true for a completed todo with extra spaces',
  () => {
    const line = '[  x  ] This is a completed todo';
    const options = { done: true };
    assert.strictEqual(checkForTodo(line, options), true);
  });

test('checkForTodo - return true for an open todo with extra spaces', () => {
  const line = '[  ] This is an open todo';
  assert.strictEqual(checkForTodo(line, {}), true);
});

test('checkForTodo - return false for an open todo with options.done', () => {
  const line = '[ ] This is an open todo';
  assert.strictEqual(checkForTodo(line, {done: true}), false);
});

