const backstop = require('backstopjs');
const {render} = require('../helpers.js');
const config = require('../config.js');

module.exports = function (req, res, next) {
    return backstop('approve', {
        config: config.resolve(req)
    }).then(() => {
      return res.end(render('<h1>Prévia aprovada</h1>', config.resolve(req).parsedHost));
    }).catch((e) => {
      console.log('Erro ao aprovar teste');
      console.log(e);
      return res.end(render('<h1>Erro ao aprovar a prévia</h1>'));
    });
}