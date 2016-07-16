var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

//NOTES: gulp.task(nameOfTask, callback);

watch(['./source/*.js'], function () {
    console.log("App has been changed... One moment");
    gulp.start('default');
});

gulp.task('default', function () {
            return browserify('./source/app.js')
                .transform("babelify", {
                    presets: ["es2015", "react"]
                })
                .bundle()
                .pipe(source('build.js'))
                .pipe(gulp.dest('./build/'))

            var uglify = require('gulp-uglify');
            var concat = require('gulp-concat');
            var watch = require('gulp-watch');

            console.log('Gulpfile loaded.  Ready to run tasks.');
