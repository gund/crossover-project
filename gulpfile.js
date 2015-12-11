/**
 * Created by alex on 12/11/15.
 */

var gulp = require('gulp')
    , rename = require('gulp-rename')
    , minifyCss = require('gulp-minify-css')
    , notify = require("gulp-notify")
    , compass = require('gulp-compass');

gulp.task('compass', function () {
    gulp.src('./src/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'src/stylesheets',
            sass: 'src'
        }))
        .pipe(minifyCss({processImport: false}))
        .on('error', notify.onError(function (error) {
            return error.message;
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/stylesheets/'));
});