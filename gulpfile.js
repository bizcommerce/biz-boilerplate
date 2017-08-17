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
path                    = require('path')

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
    browsers: ['last 2 version','ie >= 10']
  }),
  pxtorem({
    rootValue: 16,
    unitPrecision: 2,
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
  browserSync.init({
    port: 8080,
    proxy :'http://'+ path.basename(__dirname) + '.dev.bizcommerce.com.br',
    serveStatic:[{
      route: '/media/interface/neon/css',
      dir: 'css'
    }]
  });
}

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
});

gulp.task('postcss', function() {
  gulp.src('./css/*.css').pipe(postcss(processors)).pipe(gulp.dest('./css'));
  gulp.src('css/general.css').pipe(clipboard());
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
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
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
