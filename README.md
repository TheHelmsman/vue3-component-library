# Vue 3 component library test

## How to setup project for development

1. Go to you projects folder and clone repository
```bash
$ git clone https://github.com/TheHelmsman/vue3-component-library.git
```

2. Install modules
```
$ npm Install
```

3. Edit any component files to update components

4. Update version number after editing (edit package.json file):
```json
{
  "name": "@yourname/yourlibrary",
  "version": "0.0.1", // <- increment
  "main": "dist/library.js",
  "module": "dist/library.mjs",
  "files": [
    "dist/*"
  ]
  //...
}
```

5. Login to npm registry & publish your settings
```bash
$ npm login
$ npm publish --access=public
```

6. Check published files
```
$ npm view @yourname/yourlibrary
```

Note: If the publish was successful, you’ll see the package info printed in the console.
