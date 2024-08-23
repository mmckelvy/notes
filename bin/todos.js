#!/usr/bin/env node

const process = require('node:process');
const { program } = require('commander');

const todos = require('../src/todos');

program
  .name('todos')
  .option('-i, --input <string>', 'Input file', './input.md')
  .option('-o, --output <string>', 'Output file', './output.md')
  .option('-r, --range <string>', 'Filter by date / timestamp range')
  .option('-x, --done', 'Include only completed todos')
  .option('-a, --all', 'Include all todos')
  .action(todos)
;

program.parseAsync(process.argv);
