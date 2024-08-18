const fs = require('fs');
const path = require('path');
const readline = require('readline');

const parseMeta = require('../utils/parse-meta');
const getMetaKey = require('./get-meta-key');

module.exports = function meta(options) {
  const f = options.input;
  const x = options.output;

  const input = fs.createReadStream(f);
  const output = fs.createWriteStream(x);

  const rl = readline.createInterface({
    input: input,
    output: output,
    terminal: false
  });

  const seen = {};

  rl.on('line', (line) => {
    const meta = parseMeta(line);

    if (meta) {
      const key = getMetaKey(meta);

      if (!seen.hasOwnProperty(key)) {
        output.write(`${key}\n`);
        seen[key] = true;
      }
    }
  });

  rl.on('close', () => {
    console.log('io complete.');
    output.end();
  });
};
