'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('index', function() {

    beforeEach(function() {
      browser.get('#/');
    });


    it('should render index when user navigates to /', function() {
      expect(element.all(by.css('[ui-view] .main-view .header .changelist')).first().getText()).
        toMatch(/Changelist/);
    });

  });
});
