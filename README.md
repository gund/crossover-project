# crossover-project [![Build Status](https://travis-ci.org/gund/crossover-project.svg?branch=master)](https://travis-ci.org/gund/crossover-project)

Demo project for crossover application process.

Please follow next sections to get started.


## Getting Started

To get you started install the dependencies:

### Prerequisites

You must have node.js and its package manager (npm) installed.  
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

* To get the tools I use `npm`, the [node package manager][npm].
* To get the dependencies for app I use `bower`, a [client-side code package manager][bower].

Just run next line so it will install both npm modules and bower dependencies:

```
npm install
```

Behind the scenes this will also call `bower install`.

### Run the Application

First run web server with next command:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  components/           --> all app specific modules
  view1/                --> the view1 view template and logic
  view2/                --> the view2 view template and logic
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the application: Unit tests and End to End tests.

### Running Unit Tests

These are written in [Jasmine][jasmine], which runs with the [Karma Test Runner][karma].

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test:single
```


### Testing with output

You can run unit tests with output to *test_out* directory:

```
npm run test:output
```


### Testing with coverage

You can run unit tests with coverage reports to *coverage* directory:

```
npm run test:coverage
```

This will generate coverage report in lcov, json and html formats.  
You can easily configure coverage reporting to be uploaded to, for ex.,
Coveralls.io where you can track coverage statistic.


### Coverage reporting

If you want to send coverage reports to Coveralls.io you have to set
environment variable COVERALLS_REPO_TOKEN before.

After you did it you can run:

```
npm run test:report
```

Also you can uncomment *after_success* section in *.travis.yml*
to enable coverage uploading from CI server after successful builds.


### End to end testing

These tests also written in [Jasmine][jasmine] and are run with the [Protractor][protractor] End-to-End test runner.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Loading Angular Asynchronously

You can make loading the framework and application scripts asynchronously.  The
special `index-async.html` is designed to support this style of loading.  For it to work you must
inject a piece of Angular JavaScript into the HTML page.  The project has a predefined script to help
do this.

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. Application
contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.


## Contact

**Alex Malkevich (c) 2015**
