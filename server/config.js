const skin = require('../skin.json');
let config = skin.backstop;
const url = require('url');

config = Object.assign(config, {
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineFlags": ['--ignore-certificate-errors'],
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
});

config.resolve = function(req){
    
    let host;
    if(config.local){
        host = req.headers.host;
    } else {
       host = skin.host;
    }
    // For later usage
    config.parsedHost = host;

    config.scenarios = config.scenarios.map((scenario) => {
        let parsedUrl = url.parse(scenario.url);
        parsedUrl.protocol = skin.protocol;
        parsedUrl.host = host;
        parsedUrl.pathname = null;
        scenario.url = url.format(parsedUrl);
    
        return scenario;
    });
    return config;
}

module.exports = config;