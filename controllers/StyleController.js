const { CssTemplate, ScssTemplate } = require('../templates/index');

module.exports = class StyleController {
  constructor(type, componentPath, name) {
    if (type === 'css') {
      this.template = new CssTemplate(componentPath, name);
    } else if (type === 'scss') {
      this.template = new ScssTemplate(componentPath, name);
    } else {
      throw new Error(`Type: ${type} you entered is not supported`);
    }
  }
};
