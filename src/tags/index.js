const fs = require('fs');
const path = require('path');
const readline = require('readline');

const checkForTags = require('./check-for-tags');

module.exports = async function tags(options) {
  const f = path.join(options.directory, 'main.md');
  const x = path.join(options.directory, 'io.md');

  const input = fs.createReadStream(f);
  const output = fs.createWriteStream(x);

  const rl = readline.createInterface({
    input: input,
    output: output,
    terminal: false
  });

  const seen = {};

  rl.on('line', (line) => {
    const m = checkForTags(line);

    if (typeof m === 'string' && !seen.hasOwnProperty(m)) {
      output.write(`${m}\n`);
      seen[m] = true;
    }
  });

  rl.on('close', () => {
    console.log('io complete.');
    output.end();
  });
};
