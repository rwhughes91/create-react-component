#!/usr/bin/env node
const process = require('process');
const fs = require('fs');
const path = require('path');
const open = require('open');

const {
  ReactController,
  StyleController,
  TestController,
} = require('./controllers/index');

const [, , name, location] = process.argv;
let configPath = path.resolve('crc.config.json');

if (!fs.existsSync(configPath)) {
  throw new Error('Global file could not be found');
}

const config = JSON.parse(fs.readFileSync(configPath));

if (name === '--config' || name === '-c') {
  const args = process.argv.slice(3);
  if (args[0] === '--open' || args[0] === '-o') {
    open(configPath);
  } else {
    for (const arg of args) {
      const [key, value] = arg.split('=');
      if (key !== 'react' && key !== 'style' && key !== 'test') {
        throw new Error(
          `You passed the parameter ${key}. Parameter must be react, style, or test.`
        );
      }
      config[key] = value;
    }
    fs.writeFileSync(configPath, JSON.stringify(config));
  }
} else {
  let componentPath;
  if (location) {
    componentPath = path.resolve(path.join(process.cwd(), location, name));
  } else {
    componentPath = path.resolve(path.join(process.cwd(), name));
  }

  const reactController = new ReactController(
    config.react,
    componentPath,
    name,
    config
  );
  const stylesController = new StyleController(
    config.style,
    componentPath,
    name
  );
  const testController = new TestController(
    config.test,
    componentPath,
    name,
    config
  );

  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath, { recursive: true });
  }

  reactController.template.writeFile();
  stylesController.template.writeFile();
  testController.template.writeFile();
}
