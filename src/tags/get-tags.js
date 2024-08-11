module.exports = function getTags(meta) {
  const [ key, val ] = meta.split(':');

  if (key.toLowerCase() === 'tag' || key.toLowerCase() === 'tags') {
    return val.split(',').map((t) => t.trim());
  }

  return [];
};
