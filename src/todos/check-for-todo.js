const checkInRange = require('../utils/check-in-range');
const extractTimestamp = require('./extract-timestamp');

/**
 * @param {string} line - An individual line of a file.
 * @returns {boolean} - true if a todo is open, else false.
 * */
module.exports = function checkForTodo(line, options) {
  const done = /^\[\s*x\s*\][\w\s]+/;
  const open = /^\[\s*\][\w\s]+/;

  if (options.all && (done.test(line) || open.test(line))) {
    return true;
  }

  if (options.done && done.test(line)) {
    if (!options.range) {
      return true;
    }

    const ts = extractTimestamp(line);

    if (!ts) {
      return true;
    }

    const isInRange = checkInRange(ts, options);

    if (isInRange) {
      return true;
    }

    return false;
  }

  if (!options.done && open.test(line)) {
    return true;
  }

  return false;
};
