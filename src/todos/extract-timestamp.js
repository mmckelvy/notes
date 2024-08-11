module.exports = function extractTimestamp(str) {
  const f = str.split('(')[1];

  if (!f) {
    return null;
  }

  const l = f.split(')')[0];

  if (!l) {
    return null;
  }

  return l;
}
