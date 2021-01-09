const {
  JavaScriptTemplate,
  TypeScriptTemplate,
} = require('../templates/index');

module.exports = class ReactController {
  constructor(type, componentPath, name, config) {
    if (type === 'js') {
      this.template = new JavaScriptTemplate(componentPath, name, config);
    } else if (type === 'ts') {
      this.template = new TypeScriptTemplate(componentPath, name, config);
    } else {
      throw new Error(`Type: ${type} you entered is not supported`);
    }
  }
};
