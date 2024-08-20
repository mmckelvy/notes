# Quicknote

A simple command line tool to parse markdown based notes.  Track todos, filter by date ranges, custom metadata, and tags.

## Installation

```
npm install --save @mmckelvy/quicknote
```

## Usage

### Creating notes

Create a single markdown file and start adding notes.  By default Quicknote will look for a file called `input.md` in the project's root directory (the same directory as your `package.json`).  You can change this by passing an alternative file path, which we'll get to later.

Within the input markdown file, create notes using the following conventions:

1. Each note starts with a hashtag followed by a timestamp:

```
# 2024-08-10 14:41

Note content goes here.
```

2. Each note ends with three dashes (`---`):

```
# 2024-08-10 14:41

Note content goes here.

---

```

3. You can add custom metadata to any note by starting a line with a pipe character followed by a key value pair:

```
# 2024-08-10 14:41

| Activity: Customer call
| Customer: Acme

Note content goes here.

---

```

4. Metadata can be anything, but Quicknote will recognize one special metadata category: `tags`:

```
# 2024-08-10 14:41

| Activity: Customer call
| Customer: Acme
| Tags: discovery, smb

Note content goes here.

---

```

You can add any number of tags to a note, just separate each tag with a comma.

5. You can create todos by starting a line with a pair of brackets:

```
# 2024-08-10 14:41

| Activity: Customer call
| Customer: Acme
| Tags: discovery, smb

Note content goes here.

[ ] This is an open todo.

---

```

6. Mark a todo as done by inserting an `x` between the brackets:

```
# 2024-08-10 14:41

| Activity: Customer call
| Customer: Acme
| Tags: discovery, smb

Note content goes here.

[x] This todo is done.

---

```

7. Add another note by simply adding a new hashtag and timestamp:

```
# 2024-08-10 14:41

| Activity: Customer call
| Customer: Acme
| Tags: discovery, smb

Note content goes here.

[x] This todo is done.

---

# 2024-08-18 14:51

| Activity: Internal meeting
| Team: Product
| Tags: roadmap

Here is another note.

[ ] Send meeting summary to team.

---

```

### Parsing notes

Once you have some notes, you can parse them to find the information you need.  Quicknote parses your notes and outputs them to a separate output file.  By default, Quicknote will write to a file called `output.md` in the project's root directory.  Again you can change this by specifying a custom file path.

#### Todos

You can output your open todos:

```
npx todos
```

Outputs:

```
[ ] Send meeting summary to team.
```

in `output.md`.

Output your completed todos from the prior week:

```
npx todos --done --range '1 week'
```

Outputs:

```
[x] This todo is done.
```

#### Filter

You can filter notes by range:

```
npx filter -range '1 week'
```

Outputs:

```
# 2024-08-18 14:51

| Activity: Internal meeting
| Team: Product
| Tags: roadmap

Here is another note.

[ ] Send meeting summary to team.

---
```

You can filter notes by custom metadata:

```
npx filter --meta customer=acme
```

Outputs:

```
# 2024-08-10 14:41

| Activity: Customer call
| Customer: Acme
| Tags: discovery, smb

Note content goes here.

[x] This todo is done.

---
```

You can filter metadata by the key value pair, or just the key:

```
npx filter --meta customer
```

This will output all notes with the `customer` key, regardless of what the value is.

The metadata filter uses trigram similarity with the default similarity score sensitivity set to 0.6 out of a possible 1.0.  You can make the matching more strict by increasing the similarity score sensitivity (up to 1) and less strict by decreasing the similarity score sensitivity (down to 0):

```
npx filter --meta customer=acme --sensitivity 1 // will only output exact matches.
```

You can combine range and metadata filters:

```
npx filter --meta customer --range '1 week'
```

Filtering on tags work the same way as any other metadata element:

```
npx filter --meta tag=discovery
```

### Organizing your tags and custom metadata

You can output all of your unique metadata keys by running:

```
npx meta
```

Outputs:

```
Activity
Customer
Team
Tags
```

Similarly, you can output all of your tags by running:

```
npx tags
```

Outputs:

```
discovery
smb
roadmap
```

## API

### `todos`

```
Usage: npx todos [options]

Options:
  -i, --input <string>   Input file (default: "../../input.md")
  -o, --output <string>  Output file (default: "../../output.md")
  -r, --range <string>   Filter by date / timestamp range
  -x, --done             Include only completed todos
  -a, --all              Include all todos
  -h, --help             display help for command
```

### `filter`

```
Usage: npx filter [options]

Options:
  -i, --input <string>        Input file (default: "../../input.md")
  -o, --output <string>       Output file (default: "../../output.md")
  -r, --range <string>        Filter by date / time range
  -m, --meta [strings...]     Filter by metadata
  -s, --sensitivity <number>  Filter sensitivity from 0 - 1 (default: 0.6)
  -h, --help                  display help for command
```

### `meta`

```
Usage: npx meta [options]

Options:
  -i, --input <string>   Input file (default: "../../input.md")
  -o, --output <string>  Output file (default: "../../output.md")
  -h, --help             display help for command
```

### `tags`

```
Usage: tags [options]

Options:
  -i, --input <string>   Input file (default: "../../input.md")
  -o, --output <string>  Output file (default: "../../output.md")
  -h, --help             display help for command
```

## Tests

```
npm run test:unit
```
