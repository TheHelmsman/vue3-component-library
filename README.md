# Vue 3 component library test

## Introduction

This repository represents a small test of vue3 component library created with rollup and vuepress

### Installation
```bash
$ npm install @igorv/vue3-component-library
```

### Changing components

1. Go to you projects folder and clone repository
```bash
$ git clone https://github.com/TheHelmsman/vue3-component-library.git
```

2. Install modules
```bash
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
```bash
$ npm view @yourname/yourlibrary
```

Note: If the publish was successful, you’ll see the package info printed in the console.

### Documentation

1. In local repository execute following command to run documentation server locally:
```bash
$ npm run docs:dev
```

Command output:
```bash
npm run docs:dev

> @igorv/vue3-component-library@0.0.1 docs:dev
> vuepress dev docs

✔ Initializing and preparing data - done in 155ms

  vite v3.0.9 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.1.56:8080/

```

2. Open browser and go to ```http://localhost:8080/```

3. Use sidebar links to select component and get its documentation on usage and imports