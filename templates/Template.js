const fs = require('fs');

module.exports = class Template {
  constructor(componentPath, name) {
    this.componentPath = componentPath;
    this.name = name;
    this.path = null;
    this.template = null;
  }

  writeFile() {
    if (!this.template) {
      throw new Error('You must pass template before writing');
    }
    if (!this.path) {
      throw new Error('You must specify a pth before writing');
    }
    fs.writeFileSync(this.path, this.template);
  }
};
