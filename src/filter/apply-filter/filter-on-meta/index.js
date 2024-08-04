const parseMetaOpts = require('./parse-meta-opts');
const checkMetaMatch = require('./check-meta-match');

/*
Get all the meta lines.
Determine if the options.meta matches ANY of the meta.

*/
module.exports = function filterOnMeta(note, options) {
  const metaDelim = '|';

  // Get the meta lines, stripping the leading "|"
  // and the space in the process.
  const metaLines = note.reduce((acc, l) => {
    if (l[0] === metaDelim) {
      acc.push(l.slice(1).trim());
    }

    return acc;
  }, []);

  for (const opt of options.meta) {
    const o = parseMetaOpt(opt);
    const match = checkMetaMatch(o, metaLines);

    if (!match) {
      return false;
    }
  }

  return true;
};
