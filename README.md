# filesweep

**filesweep** is a streamlined alternative to `glob`, designed to return immediately useful file paths without extra `path.join` operations. By appending full file paths directly to the provided directory, it enhances **semantic clarity** and reduces boilerplate in most common file-handling tasks.

## Install

`npm install filesweep`

## Usage

```js
import sweep from 'filesweep';

const files = await sweep('./');

console.log(files);
//['./LICENSE,./README.md, ...etc]
```

## API

### sweep() (Default)

**`sweep()`** is designed as a **semantic alternative to `glob()`**, differentiating itself by returning full file paths. This eliminates redundant `path.join` operations, improving code readability in common file-handling workflows.

### glob()

Provides standard `glob` behavior for cases where standard results are preferred.

## Links

### Development Homepage:

[https://github.com/alexstevovich/filesweep](https://github.com/alexstevovich/filesweep)

_This link might become filesweep-node in the future if conflicts arise._

## License

Licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
