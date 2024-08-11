const computeTrigramSimilarity = require('./compute-trigram-similarity');

module.exports = function checkMetaMatch(opt, metaLines, sensitivity) {
  for (const l of metaLines) {
    const [ optKey ] = Object.keys(opt);
    const [ metaKey, rest ] = l.split(':');
    const optVal = opt[optKey];
    const metaVal = rest.trim();

    const keyScore = computeTrigramSimilarity(optKey, metaKey);

    // Check for a key match only
    if (typeof optVal === 'boolean') {
      if (keyScore > sensitivity) {
        return true;
      }

    // Check for a tags
    } else if (optKey.toLowerCase() === 'tag') {
      const mk = metaKey.toLowerCase();

      if (mk === 'tag' || mk === 'tags') {
        const tags = metaVal.split(',');

        for (const tag of tags) {
          const valScore = computeTrigramSimilarity(optVal, tag.trim());

          if (valScore > sensitivity) {
            return true;
          }
        }
      }

    } else {
      const valScore = computeTrigramSimilarity(optVal, metaVal);

      if (keyScore > sensitivity && valScore > sensitivity) {
        return true;
      }
    }
  }

  return false;
};
