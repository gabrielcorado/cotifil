//
var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('build', function(){
  gulp.src(['index.js'])
      .pipe(browserify({
        transform: [
          babelify.configure({
            blacklist: ['react']
          })
        ],
        standalone: 'Cotifil'
      }))
      .pipe(concat('cotifil.js'))
      .pipe(gulp.dest('./'));
});

// Build the examples
gulp.task('buildExamples', function(){
  gulp.src(['examples/index.js'])
      .pipe(browserify({
        transform: [
          babelify.configure({
            blacklist: ['react']
          })
        ]
      }))
      .pipe(concat('dist.js'))
      .pipe(gulp.dest('./examples'));
});
// Run the tests
gulp.task('test', function() {
  gulp.src(['test/index.html'])
      .pipe(mochaPhantomJS());
});

gulp.task('watch', function() {
  gulp.watch(['lib/**/*.js'], ['build']);
  gulp.watch(['test/**/*.js'], ['test']);
});
