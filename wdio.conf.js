const { UtamWdioService } = require('wdio-utam-service');
require('dotenv').config();

exports.config = {
  runner: 'local',

  specs: ['./tests/**/*.spec.js'],

  maxInstances: 1,

  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
    }
  }],

  logLevel: 'info',

  framework: 'mocha',
  reporters: ['spec'],

  waitforTimeout: 15000,

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  services: [
    'chromedriver',
    [UtamWdioService, { implicitTimeoutMsec: 5000 }]
  ],

  // 🔥 ESTA ES LA CLAVE
  utam: {
    pageObjectsRootDir: './utam',
    pageObjectsOutputDir: './.utam'
  },

  before() {
    console.log('utam:', utam);
  }
};