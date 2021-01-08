const path = require('path');
const Template = require('./base');

module.exports = class StyleTemplate extends (
  Template
) {
  constructor(componentPath, name) {
    super(componentPath);
    this.path = path.join(componentPath, `${name}.module.css`);
    this.template = `.${name} {}`;
  }
};
