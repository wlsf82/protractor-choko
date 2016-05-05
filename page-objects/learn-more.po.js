var LearnMore = function() {

  this.sidebar = element(by.css('.col-md-3'));
  this.navItems = this.sidebar.all(by.repeater('item in data.items'));

};

module.exports = LearnMore;
