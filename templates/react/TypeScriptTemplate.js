const path = require('path');
const Template = require('../Template');

module.exports = class ReactTemplate extends (
  Template
) {
  constructor(componentPath, name, config) {
    super(componentPath, name);
    this.path = path.join(componentPath, `${name}.ts`);
    this.template = `import React from 'react';
import classes from './${name}.module.${config.style}'

interface Props {}

const ${name}: React.FC<Props> = () => {
  return <div className={classes.${name}} />;
};

export default React.memo(${name});`;
  }
};
