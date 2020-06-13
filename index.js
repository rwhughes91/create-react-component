#!/usr/bin/env node
const process = require('process');
const fs = require('fs');
const path = require('path');

const [, , name, location] = process.argv;

let componentPath;
if (location) {
  componentPath = path.resolve(path.join(process.cwd(), location, name));
} else {
  componentPath = path.resolve(path.join(process.cwd(), name));
}

const JsFile = path.join(componentPath, `${name}.js`);
const CssFile = path.join(componentPath, `${name}.module.css`);

if (!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath, { recursive: true });
}

const jsTemplate = `import React from 'react';
import classes from './${name}.module.css'

const ${name} = (props) => {
  return '';
};

export default ${name};`;

const cssTemplate = `.${name} {}`;

fs.writeFileSync(JsFile, jsTemplate);
fs.writeFileSync(CssFile, cssTemplate);
