#!/usr/bin/env node

const process = require('node:process');
const { program } = require('commander');

const tags = require('../src/tags');

program
  .name('tags')
  .option('-i, --input <string>', 'Input file', '../../input.md')
  .option('-o, --output <string>', 'Output file', '../../output.md')
  .action(tags)
;

program.parseAsync(process.argv);
