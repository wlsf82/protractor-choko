var ChokoOrg = require('../page-objects/choko-org.po');
var LearnMore = require('../page-objects/learn-more.po');

describe( 'Choko.org', function() {

  var chokoOrg = new ChokoOrg();

  beforeEach(function() {
    chokoOrg.visit();
  });

  it( 'navigate to Getting started', function() {

    // @TODO: Investigate why is it been necessary since it was not at the first time.
    browser.sleep(3000);

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

  describe( 'Learn more', function() {

    var chokoOrg = new ChokoOrg();
    var learnMore = new LearnMore();

    it( 'navigate through the sidebar items', function() {

      expect(chokoOrg.learnMoreLink.getTagName()).toBe('a');

      chokoOrg.learnMoreLink.click();

      var currentUrl = browser.getCurrentUrl();

      expect(currentUrl).toEqual(browser.baseUrl + 'getting-started');

      learnMore.navItems.count().then(function(counter) {

        for (i = 1; i < counter; i++) {

          learnMore.navItems.get(i).click();

          learnMore.navItems.get(i).getText().then(function(text) {

            transformedText = text.replace(/ /g, '-').toLowerCase();

            var currentUrl = browser.getCurrentUrl();

            expect(currentUrl).toEqual(browser.baseUrl + 'documentation/' + transformedText);

          });

        }

      });

      learnMore.navItems.get(0).click();

      expect(currentUrl).toEqual(browser.baseUrl + 'getting-started');

    });

  });

});
