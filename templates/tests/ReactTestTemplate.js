const path = require('path');
const Template = require('../Template');

module.exports = class TestTemplate extends (
  Template
) {
  constructor(componentPath, name, config) {
    super(componentPath);
    this.path = path.join(componentPath, `${name}.test.${config.react}`);
    this.template = `import React from 'react';
import { render } from '@testing-library/react';
import ${name} from './${name}';

test('renders the ${name} component', () => {
  render(<${name} />);
});`;
  }
};
