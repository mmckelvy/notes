const fs = require('fs');
const path = require('path');
const readline = require('readline');

const checkForTodo = require('./check-for-todo');

module.exports = async function todos(options) {
  const f = options.input;
  const x = options.output;

  const input = fs.createReadStream(f);
  const output = fs.createWriteStream(x);

  const rl = readline.createInterface({
    input: input,
    output: output,
    terminal: false
  });

  let lineNumber = 1;

  rl.on('line', (line) => {
    const isTodo = checkForTodo(line, options);

    if (isTodo) {
      output.write(`${line}\n`);
    }

    lineNumber++;
  });

  rl.on('close', () => {
    console.log('io complete.');
    output.end();
  });
};
