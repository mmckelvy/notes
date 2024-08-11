module.exports = function genTrigrams(text) {
  // Pad the text with spaces
  const paddedText = `  ${text} `;
  const trigrams = new Set();

  // Generate trigrams
  for (let i = 0; i < paddedText.length - 2; i++) {
    trigrams.add(paddedText.slice(i, i + 3));
  }

  return trigrams;
}
