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

            // global settings for gulp
            var settings = {
                scriptsFolder: 'scripts/',
                distFolder: 'dist/'
            };

            // watch for changes!
            watch([settings.scriptsFolder + 'app/*.js'], function () {
                console.log('oh snap! scripts have been changed... let us rebundle');
                gulp.start('default'); // run default task when changes occur
            });

            // default gulp task
            gulp.task('default', function () {
                return gulp.src([settings.scriptsFolder + 'lib/jquery.js', settings.scriptsFolder + 'app/*.js'])
                    .pipe(concat('distribution-app.js'))
                    .pipe(uglify()) // comment out uglify for debugging OR development
                    .pipe(gulp.dest(settings.distFolder));
            });
