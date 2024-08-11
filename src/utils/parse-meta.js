module.exports = function parseMeta(line) {
  const re = /^\| \w+/;

  if (re.test(line)) {
    return line.slice(1).trim();
  }

  return null;
};
