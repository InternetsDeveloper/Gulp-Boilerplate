var gulp = require('gulp');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');

// NOTES:
//var uglify = require('gulp-uglify');
//gulp.task(nameOfTask, callback);

watch(['./source/app.js'], function () {
    console.log("App has been changed; re-compiling for best results.");
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
    )
};
