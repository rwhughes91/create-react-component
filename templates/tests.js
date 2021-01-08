const path = require('path');
const Template = require('./base');

module.exports = class TestTemplate extends (
  Template
) {
  constructor(componentPath, name) {
    super(componentPath);
    this.path = path.join(componentPath, `${name}.test.js`);
    this.template = `import { render } from '@testing-library/react';
import ${name} from './${name}';

test('renders the ${name} component', () => {
  render(<${name} />);
});`;
  }
};
