module.exports = function parseMeta(line) {
  const re = /^\|\s*\w+:[\w\s,]+$/;

  if (re.test(line)) {
    return line.slice(1).trim();
  }

  return null;
};
