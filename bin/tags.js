#!/usr/bin/env node

const process = require('node:process');
const { program } = require('commander');

const tags = require('../src/tags');

program
  .name('tags')
  .option('-d, --directory <string>', 'Notes directory', '../../')
  .action(tags)
;

program.parseAsync(process.argv);
