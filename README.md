# rebuild-node-sass

> Rebuilds node-sass but only if needed

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Use

```sh
npm install --save-dev rebuild-node-sass node-sass
```

Then before build (when `node-sass` is probably used), call `rebuild-node-sass`
to make sure it is ready

```json
{
  "scripts": {
    "prebuild": "rebuild-node-sass",
    "build": "..."
  }
}
```

## Testing

To execute in a different environment, for example when working on Mac, we
can install Mac Sass binary `npm install` and then switch to Docker

```sh
docker run -v $PWD:/src -w /src -it node /bin/bash
```

which produces the following output (abridged)

```sh
root@0d0cd593e320:/src# ./rebuild.sh
npm info it worked if it ends with ok
npm info using npm@5.0.0
npm info using node@v8.0.0
npm info ok
/src/node_modules/node-sass/lib/binding.js:15
      throw new Error(errors.missingBinary());
...
Binary found at /src/node_modules/node-sass/vendor/linux-x64-57/binding.node
Testing binary
Binary is fine
node-sass@4.5.3 /src/node_modules/node-sass
```

[npm-icon]: https://nodei.co/npm/rebuild-node-sass.svg?downloads=true
[npm-url]: https://npmjs.org/package/rebuild-node-sass
[ci-image]: https://travis-ci.org/bahmutov/rebuild-node-sass.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/rebuild-node-sass
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
