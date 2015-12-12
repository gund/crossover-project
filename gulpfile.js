/**
 * Created by alex on 12/11/15.
 */

var gulp = require('gulp')
    , rename = require('gulp-rename')
    , concat = require('gulp-concat')
    , jshint = require('gulp-jshint')
    , uglify = require('gulp-uglify')
    , minifyCss = require('gulp-minify-css')
    , notify = require("gulp-notify")
    , compass = require('gulp-compass');

var BUILD_JS_PATH = './app/js/';
var BUILD_JS_FILES = [
    'app/app.js',
    'app/modules/**/*.js'
];
var BUILD_CSS_PATH = './app/stylesheets/';
var BUILD_CSS_FILES = './app/sass/**/*.scss';

gulp.task('compass', function () {
    gulp.src(BUILD_CSS_FILES)
        .pipe(compass({
            config_file: './config.rb',
            css: BUILD_CSS_PATH,
            sass: 'app/sass'
        }))
        .on('error', notify.onError(function (error) {
            return error.message;
        }))
        .pipe(minifyCss({processImport: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(BUILD_CSS_PATH))
        .pipe(notify({message: 'Styles compiled'}));
});

gulp.task('compass:watch', function () {
    gulp.watch(BUILD_CSS_FILES, ['compass']);
});

gulp.task('js', function () {
    gulp.src(BUILD_JS_FILES)
        .pipe(jshint('.jshintrc'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(BUILD_JS_PATH))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(BUILD_JS_PATH))
        .pipe(notify({message: 'Scripts compiled'}));
});

gulp.task('js:watch', function () {
    gulp.watch(BUILD_JS_FILES, ['js']);
});

gulp.task('default', ['compass', 'js']);