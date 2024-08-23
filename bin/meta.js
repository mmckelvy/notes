#!/usr/bin/env node

const process = require('node:process');
const { program } = require('commander');

const meta = require('../src/meta');

program
  .name('meta')
  .option('-i, --input <string>', 'Input file', './input.md')
  .option('-o, --output <string>', 'Output file', './output.md')
  .action(meta)
;

program.parseAsync(process.argv);
