const fs = require('fs');

module.exports = class Template {
  constructor() {
    this.path = null;
    this.template = null;
  }

  writeFile() {
    if (!this.template) {
      throw new Error('You must generate template before writing');
    }
    if (!this.path) {
      throw new Error('You must generate a path before writing to disk');
    }
    fs.writeFileSync(this.path, this.template);
  }
};
