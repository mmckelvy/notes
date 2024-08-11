/**
 * @param {string} line
 *
 * @return {string} or {null} - Returns the string if it's a meta line
 * else returns null.
 * */
module.exports = function checkForMeta(line) {
  const metaDelim = '|';

  if (line[0] === metaDelim) {
    return line.slice(1).trim().split(':')[0];
  }

  return null;
};
