const config = require('./config');

function render(content, host){
    return `
      <!DOCTYPE html>
      <html lang="en" dir="ltr">
        <head>
          <link href="https://cdn.bizcommerce.com.br/biz-files/bizfont.css" rel="stylesheet">
          <meta charset="utf-8">
          <title></title>
          <style type="text/css">
            body {
              font-family: 'biz', sans-serif;
              body: font-size: 16px;
              color: #777
            }
            h1 {font-size:3rem}
            h2 {font-size:2rem}
            a {
              text-decoration: none;
              color: #999
            }
            .button {
              border-radius: .25rem;
              padding: 1rem 2rem;
              background: #895FCC;
              color: #fff;
              font-size: 1rem;
              display: inline-block
            }
            .cta {
              background: #F0514E
            }
          </style>
        </head>
        <body>
          <header>
            <h1><a href="/aprovacao">Central de aprovação Front-end</a></h1>
            <h2>${host}</h2>
          </header>
          <div class="main">
            ${content}
          </div>
        </body>
      </html>
    `
}
module.exports.render = render;