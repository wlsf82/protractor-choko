var Blog = require('../page-objects/blog.po');
var ChokoOrg = require('../page-objects/choko-org.po');
var CreateBlogPostForm = require('../page-objects/create-blog-post-form.po');
var Messages = require('../page-objects/partials/messages.po');

describe( 'Blog', function() {

  var blog = new Blog();
  var chokoOrg = new ChokoOrg();
  var createBlogPostForm = new CreateBlogPostForm();
  var messages = new Messages();

  beforeEach(function() {
    chokoOrg.visit();
    chokoOrg.blogLink.click();
    blog.addBlogPostButton.click();
  });

  it( 'access create a blog post form from the add blog post button', function() {

    browser.getCurrentUrl().then(function(url) {
      expect(url).toEqual(browser.baseUrl + 'create/blog');
    });

  });

  it( 'try to create a blog post without filling any field', function() {

    createBlogPostForm.saveButton.click();

    expect(messages.error.isDisplayed()).toBe(true);

  });

});
