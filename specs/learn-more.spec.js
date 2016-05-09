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

    learnMore.leftNavItems.count().then(function(counter) {

      for (var i = 1; i < counter; i++) {

        learnMore.leftNavItems.get(i).click();

        learnMore.leftNavItems.get(i).getText().then(function(text) {

          transformedText = text.replace(/ /g, '-').toLowerCase();

          var currentUrl = browser.getCurrentUrl();

          expect(currentUrl).toEqual(browser.baseUrl + 'documentation/' + transformedText);

        });

      }

    });

    learnMore.leftNavItems.get(0).click();

    learnMore.leftNavItems.get(0).getText().then(function(text) {

      transformedText = text.replace(/ /g, '-').toLowerCase();

      var currentUrl = browser.getCurrentUrl();

      expect(currentUrl).toEqual(browser.baseUrl + transformedText);

    });

  });

});
