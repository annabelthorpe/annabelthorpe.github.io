'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var strip = require('gulp-strip-comments');
var uglify = require('gulp-uglify');

gulp.task('bundleScripts', function() {
  return gulp.src([
    './_javascript/vendor/smoothScroll.js',
    './_javascript/vendor/wow.js',
    './_javascript/vendor/instafetch.js',
    './_javascript/vendor/owlcarousel.js',
    './_javascript/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(strip())
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('minifyBundle', ['bundleScripts'], function() {
  return gulp.src('./assets/js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('build', ['minifyBundle']);

gulp.task('watch', function() {
  gulp.watch('./_javascript/**/*.js', ['minifyBundle']);
});

gulp.task('default', ['build', 'watch']);
