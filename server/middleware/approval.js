const backstop = require('backstopjs');
const {render} = require('../helpers.js');
const config = require('../config.js');

module.exports = function (req, res, next) { 
    let content = `
      <a class="button references" href="/referencia">Salvar referências</a>
      <a class="button cta test" href="/testar">Testar</a>
      <a class="button results" target="_blank" href="/backstop/html_report">Ver resultados</a>
      <a class="button approve" href="/aprovar">Aprovar</a>
    `;
    return res.end(render(content, config.resolve(req).parsedHost));
}