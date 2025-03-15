# sweepdir

> **Archetype:** Node.js package

**sweepdir** is a streamlined alternative to `glob`, designed to return immediately useful file paths without extra `path.join` operations. By appending full file paths directly to the provided directory, it enhances **semantic clarity** and reduces boilerplate in most common file-handling tasks.

## Install

`npm install sweepdir`

## Usage

```js
import sweepDir from 'sweepdir';

const files = await sweepDir('./');
console.log(files);
// ['./LICENSE', './README.md', ...etc]

const filesByExt = await sweepDir('./', '**/*.md');
console.log(filesByExt);
// ['./README.md']
```

## API

### sweepDir() (Default)

**`sweepDir()`** is designed as a **semantic alternative to `glob()`**, differentiating itself by returning full file paths. This eliminates redundant `path.join` operations, improving code readability in common file-handling workflows.

## Links

### Development Homepage:

[https://github.com/alexstevovich/sweepdir](https://github.com/alexstevovich/sweepdir)

_This link might become sweepdir-node in the future if conflicts arise._

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
