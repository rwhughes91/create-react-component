const path = require('path');
const Template = require('./base');

module.exports = class ReactTemplate extends (
  Template
) {
  constructor(componentPath, name) {
    super(componentPath);
    this.path = path.join(componentPath, `${name}.js`);
    this.template = `import React from 'react';
import classes from './${name}.module.css'

const ${name} = () => {
  return '';
};

export default React.memo(${name});`;
  }
};
