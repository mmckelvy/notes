# Simple Note
A simple command line tool to parse notes.

## Install
```
npm install --save @mmckelvy/simple-note
```

How do we want to set this up?

npm install

configure:

create two files:
main.md
io.md

line numbers.

Create as separate commands.

todos -> program
filter -> program

Will have the option to output to:

HTML
PDF
Word
CSV

filter -m activity -r "1 week"
filter -s 2024-07-24 -e 2024-07-30
filter -m customer="Cosma"
filter -m tag="foo"

meta
tags

select a post



We'll need to move the range filter logic out to its own module.
Probably should move the metaDelim out to its own section.


Remaining items:

[ ] Add more unit tests.
[ ] Args for the full file paths.
[ ] Start and end timestamps
[ ] README
[ ] Publish!
