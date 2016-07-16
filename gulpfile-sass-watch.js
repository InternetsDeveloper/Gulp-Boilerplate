var gulp = require('gulp');
var sass = require('gulp-sass');
var watcher = require('gulp-watch');

// use gulp-watch for changes 
// 1st arg = array of strings
// of folders / files to watch

watcher(['./sass/*.scss'], function () {
    console.log('App modified... one moment');
    gulp.start('scss-2-css');
});

// Create task: 
// Two Arg: Name(String), Callback(Function)
