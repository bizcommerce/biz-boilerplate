var gulp                = require('gulp'),
svgSprite               = require('gulp-svg-sprite'),
clipboard               = require("gulp-clipboard"),
stylus                  = require('gulp-stylus'),
svgmin                  = require('gulp-svgmin'),
gulpif                  = require('gulp-if'),
//sprite                  = require('css-sprite').stream;

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

// gulp.task('img-sprite', function () {
//   return gulp.src('./img/sprites/*.png')
//     .pipe(sprite({
//       name: 'sprite',
//       style: 'sprite.styl',
//       cssPath: '../img/sprites',
//       processor: 'stylus'
//     }))
//     .pipe(gulpif('*.png', gulp.dest('./img/sprites'), gulp.dest('./css')))
// });

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
    })).pipe(gulp.dest('./css'));
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
    .pipe(gulp.dest('./css'));
});

gulp.task('copy-css', function() {
  gulp.src("./css/general.css")
      .pipe(clipboard())
      .pipe(gulp.dest("./dist"));
});

gulp.task('watch', function() {
  var watcher = gulp.watch('./css/*.styl', ['dev']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
