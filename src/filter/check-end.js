module.exports = function checkEnd(line) {
  if (line === '---') {
    return true;
  }

  return false;
};
