#!/usr/bin/env node
const process = require('process');
const fs = require('fs');
const path = require('path');

const {
  ReactTemplate,
  StylesTemplate,
  TestTemplate,
} = require('./templates/index');

const [, , name, location] = process.argv;

let componentPath;
if (location) {
  componentPath = path.resolve(path.join(process.cwd(), location, name));
} else {
  componentPath = path.resolve(path.join(process.cwd(), name));
}

// const jsFile = path.join(componentPath, `${name}.js`);
// const cssFile = path.join(componentPath, `${name}.module.css`);
// const testFile = path.join(componentPath, `${name}.test.js`);

if (!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath, { recursive: true });
}

const reactTemplate = new ReactTemplate(componentPath, name);
const stylesTemplate = new StylesTemplate(componentPath, name);
const testTemplate = new TestTemplate(componentPath, name);

reactTemplate.writeFile();
stylesTemplate.writeFile();
testTemplate.writeFile();

// const jsTemplate = `import React from 'react';
// import classes from './${name}.module.css'

// const ${name} = () => {
//   return '';
// };

// export default React.memo(${name});`;

// const cssTemplate = `.${name} {}`;

// fs.writeFileSync(jsFile, jsTemplate);
// fs.writeFileSync(cssFile, cssTemplate);
// fs.writeFileSync(testFile, '');
