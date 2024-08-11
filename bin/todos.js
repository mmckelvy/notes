#!/usr/bin/env node

const process = require('node:process');
const { program } = require('commander');

const todos = require('../src/todos');

program
  .name('todos')
  .option('-d, --directory <string>', 'Notes directory', '../../')
  .option('-r, --range <string>', 'Date / timestamp range')
  .option('-x, --done', 'Only done todos')
  .option('-a, --all', 'All todos')
  .action(todos)
;

program.parseAsync(process.argv);
