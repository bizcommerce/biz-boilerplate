const backstop = require('backstopjs');
const {render} = require('../helpers.js');
const config = require('../config.js');

module.exports = function (req, res, next) {
    backstop('reference', {
        config: config.resolve(req)
    }).then(() => {
      let content = `
        <h1>Referência salva com sucesso</h1>
        <a class="button results" target="_blank" href="/backstop/html_report">Ver resultados</a>
        <a class="button cta test" href="/testar">Testar</a>
      `;
      return res.end(render(content, config.resolve(req).parsedHost));
    }).catch((e) => {
      console.log('Erro ao salvar Referência');
      console.log(e);
      return res.end(render(content, config.resolve(req).parsedHost));
    });
  }