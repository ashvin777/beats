'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {

  return gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
  
});

gulp.task('html', function () {
  
    return gulp.src('./app/**/*.html')
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
    
  });

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./dist"
  });

  gulp.watch('./app/**/*.scss', ['sass']);
  gulp.watch("./app/**/*.html", ['html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);