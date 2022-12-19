const Base = require("../base");

class SuperCalculator extends Base {
  constructor() {
    super();
  }

  get firstOperandInput() {
    return element(by.model("first"));
  }

  get secondOperandInput() {
    return element(by.model("second"));
  }

  get goButton() {
    return element(by.id("gobutton"));
  }

  get calculationResult() {
    return element(by.css("form h2"));
  }

  get randomDigit() {
    return Math.floor(Math.random() * 10);
  }

  async selectOperation(operator) {
    await element(by.cssContainingText('option', operator)).click();
  }
}

module.exports = SuperCalculator;
