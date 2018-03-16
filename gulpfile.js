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
backstop                = require('backstopjs');

var config = require('./skin');
var {rootValue, unitPrecision} = config.pxtorem;
var {protocol, host, theme } = config;

// More complex configuration example
config                  = {
    svg                 : {
      xmlDeclaration    : false,
      doctypeDeclaration: false,
      rootAttributes    : {
          class         : 'svg-sprites',
          id            : 'skin-sprite'
      }
    },
    mode                : {
        symbol          : {
          symbol: true,
          inline: false
        }
    }
};

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

function loadbrowserSync(){
  var url = [protocol, host].join('://');

  browserSync.init({
    port: 8080,
    proxy : url,
    serveStatic:[{
      route: '/media/interface/'+ theme +'/css',
      dir: 'css'
    }]
  });
}

gulp.task('reference', function () {
  return backstop('reference');
});

gulp.task('test', function () {
  return backstop('test');
});

gulp.task('approve', function () {
  return backstopjs('approve');
});

gulp.task('svg-min', function () {
  gulp.src('svg/*.svg').pipe(svgmin({
    plugins: [{removeStyleElement: true}]
  })).pipe(gulp.dest('./svg'));
});

gulp.task('svg', function() {
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
    gulp.src('css/general.css').pipe(clipboard());
});

gulp.task('postcss', function() {
  gulp.src('./css/*.css').pipe(postcss(processors)).pipe(gulp.dest('./css')).pipe(browserSync.stream());
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
  gulp.src("./css/general.css")
      .pipe(clipboard())
      .pipe(gulp.dest("./dist"));
});

gulp.task('watch', function() {
  var stylus = gulp.watch('./css/*.styl', ['dev']);
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
