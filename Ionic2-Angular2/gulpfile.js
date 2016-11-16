var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-html-minifier');
var templateCache = require('gulp-angular-templatecache-ionic');
var embedTemplates = require('gulp-angular-embed-templates');
var concss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var htmlreplace = require('gulp-html-replace');
var gls = require('gulp-live-server');
var gutil = require('gulp-util');

var path = {
  HTML: './app/index.html',
  HTML_DEV: './app/local/index.html',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: './dist',
  DEST_BUILD: './dist/build',
  DEST_SRC: './dist/src',
  ENTRY_POINT: 'www/build/js/app.bundle.js',
  END_POINT: 'www/build/js/',
  CSS_SOURCE:'www/build/css/*.css',
  CSS_DIST:'www/build/css'
};

// gulp.task('serve', function() {
//   var server = gls.static('./dist/src', 8888); //equals to gls.static('public', 3000);
//   server.start();
// });








// gulp.task('minifyHtml', function() {
//   return gulp.src(path.HTML)
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest(path.HTML))
// });
// gulp.task('css:optimize', function () {
//     return gulp.src('./app/css/*.css')
//         .pipe(concss('/css/bundle.css'))
//         .pipe(ccss())
//         .pipe(gulp.dest(path.DEST_BUILD));
// });
//
// gulp.task('css:optimizeDev', function () {
//     return gulp.src('./app/css/*.css')
//         .pipe(concss('/css/build.css'))
//         .pipe(ccss())
//         .pipe(gulp.dest(path.DEST_SRC));
// });
// gulp.task('copy', function(){
//   gulp.src(path.HTML)
//     .pipe(gulp.dest(path.DEST));
// });
//
// gulp.task('watch', function() {
//   gulp.watch(path.HTML, ['copy']);
// // var bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babel));
//   var watcher  = watchify(browserify({
//     entries: [path.ENTRY_POINT],
//     debug: true,
//     cache: {}, packageCache: {}, fullPaths: true
//   })).transform("babelify", {presets: ["es2015", "react"]});
//
//   return watcher.on('update', function () {
//     watcher.bundle()
//       .pipe(source(path.OUT))
//       .pipe(gulp.dest(path.DEST_SRC))
//       console.log('Updated');
//   })
//     .bundle()
//     .pipe(source(path.OUT))
//     .pipe(gulp.dest(path.DEST_SRC));
// });
//
//
//
// gulp.task('replaceHTML', function(){
//   gulp.src(path.HTML)
//     .pipe(htmlreplace({
//       'js': 'build/' + path.MINIFIED_OUT
//     }))
//     .pipe(gulp.dest(path.DEST_BUILD));
// });
// gulp.task('replaceHTMLDev', function(){
//   gulp.src(path.HTML_DEV)
//     .pipe(htmlreplace({
//       'js': 'src/' + path.OUT
//     }))
//     .pipe(gulp.dest(path.DEST_SRC));
// });
gulp.task('uglify', function() {
   gulp.src(path.ENTRY_POINT)
    .pipe(uglify({compress:true}))
    .pipe(gulp.dest(path.END_POINT));
});
gulp.task('cssmin', function () {
  return gulp.src('assets/**/*.css')
    .pipe(concss("bundle.css"))
    .pipe(gulp.dest('path.CSS_DIST'));
});

gulp.task('minify-css', function() {
    return gulp.src(path.CSS_SOURCE)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.CSS_DIST));
    });
    gulp.task('htmlmin', function() {
      var minifyHtmlOpts = {
        empty: true,
        quotes: true,
        loose: true
    };
    var temp = {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeComments: true
  };
      return gulp.src('www/build/**/*.html')
        //.pipe(htmlmin(minifyHtmlOpts).on('error', gutil.log))
        .pipe(templateCache('templates.js',{module:'app.core',standAlone:false,root:'build/',htmlmin:temp}))
        .pipe(gulp.dest('www/build/js'))
    });
    gulp.task('prod-serve', function() {
      var server = gls.static('./www', 8100); //equals to gls.static('public', 3000);
      server.start();
    });
gulp.task('build:prod', ['htmlmin','minify-css','uglify']);
