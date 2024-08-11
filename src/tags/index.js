const fs = require('fs');
const path = require('path');
const readline = require('readline');

const parseMeta = require('../utils/parse-meta');
const getTags = require('./get-tags');

module.exports = async function tags(options) {
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
      const tags = getTags(meta);

      for (const tag of tags) {
        if (!seen.hasOwnProperty(tag)) {
          output.write(`${tag}\n`);
          seen[tag] = true;
        }
      }
    }
  });

  rl.on('close', () => {
    console.log('io complete.');
    output.end();
  });
};
