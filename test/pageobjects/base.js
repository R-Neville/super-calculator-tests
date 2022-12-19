const { browser } = require('protractor');

class Base {
  constructor() {
    this.timeout = 30000;
    this.EC = browser.ExpectedConditions;
  }

  get(url) {
    browser.get(url);
  }

  async waitForElementPresence(element) {
    await browser.wait(this.EC.presenceOf(element), this.timeout, "The element is not present");
  }

  async sendInputData(element, data) {
    await this.waitForElementPresence(element);
    await element.sendKeys(data);
  }
}

module.exports = Base;
