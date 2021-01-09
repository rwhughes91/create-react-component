const {
  EnzymeTestingTemplate,
  ReactTestingTemplate,
} = require('../templates/index');

module.exports = class TestController {
  constructor(type, componentPath, name, config) {
    if (type === 'react-testing') {
      this.template = new ReactTestingTemplate(componentPath, name, config);
    } else if (type === 'enzyme') {
      this.template = new EnzymeTestingTemplate(componentPath, name, config);
    } else {
      throw new Error(`Type: ${type} you entered is not supported`);
    }
  }
};
