var ChokoOrg = require('../page-objects/choko-org.po');
var LearnMore = require('../page-objects/learn-more.po');

describe( 'Learn more', function() {

  var chokoOrg = new ChokoOrg();
  var learnMore = new LearnMore();

  it( 'navigate through the sidebar items', function() {

    chokoOrg.visit();

    expect(chokoOrg.learnMoreLink.getTagName()).toBe('a');

    chokoOrg.learnMoreLink.click();

    var currentUrl = browser.getCurrentUrl();

    expect(currentUrl).toEqual(browser.baseUrl + 'getting-started');

    learnMore.navItems.count().then(function(counter) {

      for (var i = 1; i < counter; i++) {

        learnMore.navItems.get(i).click();

        learnMore.navItems.get(i).getText().then(function(text) {

          transformedText = text.replace(/ /g, '-').toLowerCase();

          var currentUrl = browser.getCurrentUrl();

          expect(currentUrl).toEqual(browser.baseUrl + 'documentation/' + transformedText);

        });

      }

    });

    learnMore.navItems.get(0).click();

    learnMore.navItems.get(0).getText().then(function(text) {

      transformedText = text.replace(/ /g, '-').toLowerCase();

      var currentUrl = browser.getCurrentUrl();

      expect(currentUrl).toEqual(browser.baseUrl + transformedText);

    });

  });

});
