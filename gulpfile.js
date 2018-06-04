var gulp                = require('gulp'),
svgSprite               = require('gulp-svg-sprite'),
clipboard               = require("gulp-clipboard"),
stylus                  = require('gulp-stylus'),
svgmin                  = require('gulp-svgmin'),
gulpif                  = require('gulp-if'),
postcss                 = require('gulp-postcss'),
autoprefixer            = require('autoprefixer'),
pxtorem                 = require('postcss-pxtorem'),
browserSync             = require('browser-sync').create(),
path                    = require('path'),
backstop                = require('backstopjs'),
url                     = require('url')


var config = require('./skin');
var {rootValue, unitPrecision} = config.pxtorem;
var {protocol, host, theme } = config;

var processors = [
  autoprefixer({
    browsers: config.browsers
  }),
  pxtorem({
    rootValue: rootValue,
    unitPrecision: unitPrecision,
    propList: [
      'font',
      'font-size',
      'line-height',
      'letter-spacing',
      'width',
      'height',
      'margin',
      'margin*',
      'padding*',
      'top',
      'right',
      'bottom',
      'left'
    ],
    mediaQuery: false,
    minPixelValue: 0,
    replace: true
  })
];

let backstopConfig = config.backstop;
backstopConfig = Object.assign(backstopConfig, {
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

function formatUrl(req){
  backstopConfig.scenarios = backstopConfig.scenarios.map((scenario) => {
    let parsedUrl = url.parse(scenario.url);
    parsedUrl.protocol = protocol;
    parsedUrl.host = req.headers.host;
    scenario.url = url.format(parsedUrl);
    return scenario;
  });
}
function render(content){
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
          <h2>${config.host}</h2>
        </header>
        <div class="main">
          ${content}
        </div>
      </body>
    </html>
  `
}
function loadbrowserSync(){
  browserSync.init({
    port: 8080,
    proxy : [protocol, host].join('://'),
    serveStatic:[
      {
        route: '/media/interface/0/'+ theme +'/css',
        dir: 'css'
      },
      {
        route: '/media/interface/0/'+ theme +'/js',
        dir: 'js'
      },
      {
        route: '/backstop',
        dir: 'backstop_data'
      }
    ],
    middleware: [
      {
        route: "/aprovacao",
        handle: function (req, res, next) {
          let content = `
            <a class="button references" href="/referencia">Salvar referências</a>
            <a class="button cta test" href="/testar">Testar</a>
            <a class="button results" target="_blank" href="/backstop/html_report">Ver resultados</a>
            <a class="button approve" href="/aprovar">Aprovar</a>
          `;
          return res.end(render(content));
        }
      },
      {
        route: "/referencia",
        handle: function (req, res, next) {
          formatUrl(req);
          backstop('reference', {
            config: backstopConfig
          }).then(() => {
            let content = `
              <h1>Referência salva com sucesso</h1>
              <a class="button results" target="_blank" href="/backstop/html_report">Ver resultados</a>
              <a class="button cta test" href="/testar">Testar</a>
            `;
            return res.end(render(content));
          }).catch((e) => {
            console.log('Erro ao salvar Referência');
            console.log(e);
            return res.end(render(content));
          });
        }
      },
      {
        route: "/testar",
        handle: function (req, res, next) {
          formatUrl(req);
          return backstop('test', {
            config: backstopConfig
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
            return res.end(render(content));
          });
        }
      },
      {
        route: "/aprovar",
        handle: function (req, res, next) {
          formatUrl(req);
          return backstop('approve', {
            config: backstopConfig
          }).then(() => {
            return res.end(render('<h1>Prévia aprovada</h1>'));
          }).catch((e) => {
            console.log('Erro ao aprovar teste');
            console.log(e);
            return res.end(render('<h1>Erro ao aprovar a prévia</h1>'));
          });
        }
      },
    ]
  });
}

gulp.task('svg-min', function () {
  gulp.src('svg/*.svg').pipe(svgmin({
    plugins: [{removeStyleElement: true}]
  })).pipe(gulp.dest('./svg'));
});

gulp.task('svg', function() {
  // More complex configuration example
  const config = {
    svg:{
      xmlDeclaration: false,
      doctypeDeclaration: false,
      rootAttributes: {
        class: 'svg-sprites',
        id: 'skin-sprite'
      }
    },
    mode:{
      symbol:{
        symbol: true,
        inline: false
      }
    }
  };

  gulp.src('svg/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('templates'))
    .pipe(clipboard());
});

gulp.task('prod', function() {
  gulp.src('./css/*.styl')
    .pipe(stylus({
      'include css': true,
      'import': 'vars/prod',
      'url': {
        'name':'embedurl',
        'limit': false
      }
    }))
    .pipe(gulp.dest('./css'));
    gulp.src('css/one.css').pipe(clipboard());
});

gulp.task('postcss', function() {
  gulp.src('./css/*.css').pipe(postcss(processors)).pipe(gulp.dest('./css')).pipe(browserSync.reload({ stream: true}));
});

gulp.task('dev', function() {
  gulp.src('./css/*.styl')
    .pipe(stylus({
      'include css': true,
      'import'     : 'vars/dev',
      'url': {
        'name':'embedurl',
        'limit': false
      }
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('copy-css', function() {
  gulp.src("./css/one.css")
      .pipe(clipboard())
      .pipe(gulp.dest("./dist"));
});

gulp.task('watch', function() {
  var stylus = gulp.watch('**/*.styl', ['dev']);
  var css = gulp.watch('./css/*.css', ['postcss']);
  loadbrowserSync();

  stylus.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  var stylus = gulp.watch('./css/*.styl', ['dev']);

  css.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});