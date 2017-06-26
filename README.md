# rebuild-node-sass

> Rebuilds node-sass but only if needed

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
