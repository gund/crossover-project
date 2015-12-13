module.exports = function (config) {

    var testOut = process.argv.indexOf('--output') !== -1;
    var withCoverage = process.argv.indexOf('--with-coverage') !== -1;

    var configuration = {

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/modules/**/*.js',
            'test/**/*Spec.js'
        ],

        exclude: [],

        preprocessors: {
            'app/modules/**/*.js': ['coverage']
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter'
        ],

        reporters: ['progress'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'coverage/', subdir: '.'},
                {type: 'json', dir: 'coverage/', subdir: '.'},
                {type: 'text-summary'}
            ]
        },

        // browser for travis-ci
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        browserNoActivityTimeout: 100000

    };

    if (testOut) configuration.reporters.push('junit');
    if (withCoverage) configuration.reporters.push('coverage');

    /** @name process.env.TRAVIS */
    if (process.env.TRAVIS) {
        configuration.browsers = ['Chrome_travis_ci'];
    }

    config.set(configuration);
};
