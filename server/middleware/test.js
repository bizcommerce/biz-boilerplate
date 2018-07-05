const backstop = require('backstopjs');
const {render} = require('../helpers.js');
const config = require('../config.js');

module.exports = function (req, res, next) {
    return backstop('test', {
        config: config.resolve(req)
    }).then(() => {
      let content = `
        <h1>Teste realizado com sucesso</h1>
        <h2>Sem divergências</h2>
        <a class="button results" target="_blank" href="/backstop/html_report">Ver resultados</a>
        <a class="button cta test" href="/aprovar">Aprovar</a>
        <a class="button cta test" href="/testar">Testar novamente</a>
      `;
      return res.end(render(content));
    }).catch((e) => {
      console.log('Erro ao gerar teste');
      console.log(e);
      let content = `
        <h1>Diferenças encontradas no teste realizado.</h1>
        <a class="button results cta" target="_blank" href="/backstop/html_report">Ver resultados</a>
        <a class="button test" href="/testar">Testar novamente</a>
        <a class="button cta test" href="/aprovar">Aprovar</a>
      `
      return res.end(render(content, config.resolve(req).parsedHost));
    });
}