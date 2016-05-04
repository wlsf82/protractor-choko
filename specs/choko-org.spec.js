var ChokoOrg = require('../page-objects/choko-org.po');

describe( 'Choko.org', function() {

  var chokoOrg = new ChokoOrg();

  beforeEach(function() {
    chokoOrg.visit();
  });

  it( 'navigate to Getting started', function() {

    chokoOrg.gettingStartedLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://choko.org/getting-started');
    });

  });

  it( 'navigate to Demo', function() {

    chokoOrg.demoLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://demo.choko.org/');
    });

  });

  it( 'navigate to Contribute', function() {

    chokoOrg.contributeLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://choko.org/contribute');
    });

  });

  it( 'navigate to About', function() {

    chokoOrg.aboutLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://choko.org/about');
    });

  });

  it( 'navigate to Blog', function() {

    chokoOrg.blogLink.click();

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual('http://choko.org/blog');
    });

  });

  fdescribe( 'Learn more', function() {

    it( 'navigate through the sidebar items', function() {

      var learnMoreLink = element(by.linkText('Learn more'));
      expect(learnMoreLink.getTagName()).toBe('a');

      learnMoreLink.click();

      var currentUrl = browser.getCurrentUrl();

      expect(currentUrl).toContain(browser.baseUrl + 'getting-started');

      var sidebar = element(by.css('.col-md-3'));

      var navItems = sidebar.all(by.repeater('item in data.items'));

      for (i = 1; i < 7; i++) {
        navItems.get(i).click();

        navItems.get(i).getText().then(function(text) {
          transformedLink = text.replace(/ /g, '-').toLowerCase();

          var currentUrl = browser.getCurrentUrl();

          expect(currentUrl).toContain(browser.baseUrl + 'documentation/' + transformedLink);
        });
      }

      navItems.get(0).click();

      expect(currentUrl).toContain(browser.baseUrl + 'getting-started');

    });

  });

});
