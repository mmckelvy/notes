module.exports = function extractTimestamp(note) {
  const [ firstLine ] = note;
  return firstLine.slice(2);
}
