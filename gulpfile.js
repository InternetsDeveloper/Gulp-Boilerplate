var gulp = require('gulp');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');

// NOTES:
//var uglify = require('gulp-uglify');
//gulp.task(nameOfTask, callback);