const parseMetaOpt = require('./parse-meta-opt');
const checkMetaMatch = require('./check-meta-match');

const parseMeta = require('../../../utils/parse-meta');
/*
Get all the meta lines.
Determine if the options.meta matches ANY of the meta.

*/
module.exports = function filterOnMeta(note, options) {
  // Get the meta lines, stripping the leading "|"
  // and the space in the process.
  const metaLines = note.reduce((acc, l) => {
    const meta = parseMeta(l);

    if (meta) {
      acc.push(meta);
    }

    return acc;
  }, []);

  for (const opt of options.meta) {
    const o = parseMetaOpt(opt);

    const match = checkMetaMatch(o, metaLines, options.sensitivity);

    if (!match) {
      return false;
    }
  }

  return true;
};
