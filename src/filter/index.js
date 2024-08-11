const fs = require('fs');
const path = require('path');
const readline = require('readline');

const checkStart = require('./check-start');
const checkEnd = require('./check-end');
const applyFilter = require('./apply-filter');

module.exports = async function filter(options) {
  const f = options.input;
  const x = options.output;

  const input = fs.createReadStream(f);
  const output = fs.createWriteStream(x);

  const rl = readline.createInterface({
    input: input,
    output: output,
    terminal: false
  });

  let note = [];
  let collectingNote = false;

  rl.on('line', (line) => {
    if (collectingNote) {
      note.push(line);
      const isEnd = checkEnd(line);

      if (isEnd) {
        // Does this note pass the filter?
        const match = applyFilter(note, options);

        // It does, add to the note to the output.
        if (match) {
          for (let l of note) {
            output.write(`${l}\n`);
          }
          output.write(`\n`);
        }

        // Either way, reset the note and move on to the next one.
        note = [];
        collectingNote = false;
      }

    } else {
      const isStart = checkStart(line);

      if (isStart) {
        note.push(line);
        collectingNote = true;
      }
    }
  });

  rl.on('close', () => {
    console.log('io complete.');
    output.end();
  });
};
