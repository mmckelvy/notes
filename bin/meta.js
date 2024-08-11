#!/usr/bin/env node

const process = require('node:process');
const { program } = require('commander');

const meta = require('../src/meta');

program
  .name('meta')
  .option('-d, --directory <string>', 'Notes directory', '../../')
  .action(meta)
;

program.parseAsync(process.argv);
