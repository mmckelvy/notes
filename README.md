# @mmckelvy/quicknote

A simple command line tool to parse notes.  Write your notes in markdown, follow a few basic conventions, quickly find the information you need.

## Installation

```
npm install --save @mmckelvy/quicknote
```

## Usage

Create single markdown file for all of your notes.  Structure your notes as follows:

```
# 2024-08-15 21:58

| Topic: My first note
| Tags: foo

Here is the first note.  It's about frontend development.  Each note starts with a hashtag and a timestamp and closes with three dashes "---".

---

# 2024-08-17 10:20

| Topic: My second note
| Tags: bar, baz

This is a second note.  Each note can include "meta" information.  To create meta information, start the line with a pipe character "|" followed by key value pairs (key: value).  For example, in this note, the metadata is:

"Topic": "My second note"
"Tags": "bar, baz"

Metadata can be anything you wish.  The one special metadata element is "Tags".  Quicknote recognizes the tags key and will parse and filter off them accordingly.

---

# 2024-08-17 17:55

Notes can also include todos.  Create a todo like this:

[ ] This is an open todo.
[x] This is a completed todo.

---

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


Update README and publish!
