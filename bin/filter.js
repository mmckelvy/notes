#!/usr/bin/env node

const process = require('node:process');
const { program } = require('commander');

const filter = require('../src/filter');

program
  .name('filter')
  .option('-d, --directory <string>', 'Notes directory', '../../')
  .option('-r, --range <string>', 'Date / timestamp range')
  .option('-m, --meta [strings...]', 'Filter by metadata')
  .option('-s, --sensitivity <number>', 'Filter sensitivity from 0 - 1', 0.6)
  .action(filter)
;

program.parseAsync(process.argv);

