const path = require('path');
const Template = require('../Template');

module.exports = class TestTemplate extends (
  Template
) {
  constructor(componentPath, name, config) {
    super(componentPath);
    this.path = path.join(componentPath, `${name}.test.${config.react}`);
    this.template = `import React from 'react';
import { shallow } from 'enzyme';
import ${name} from './${name}';

it('renders the ${name} component', () => {
  const wrapper = shallow(<${name} />)
  expect(wrapper.exists()).toBe(true)
});`;
  }
};
