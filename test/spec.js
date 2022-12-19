const SuperCalculator = require("./pageobjects/pages/super-calculator");

const url = "https://juliemr.github.io/protractor-demo/";

const ADDITION_OPERATOR = "+";
const SUBTRACTION_OPERATOR = "-";
const MULTIPLICATION_OPERATOR = "*";
const DIVISION_OPERATOR = "/";

describe("Super Calculator", () => {
  describe("addition operation", () => {
    beforeEach(function () {
      this.superCalculator = new SuperCalculator();
      this.superCalculator.get(url);
      this.superCalculator.selectOperation(ADDITION_OPERATOR);
    });

    afterEach(function () {
      // Refreshing after each because the calculation result
      // h2 remains on the screen after each calculcation, and
      // we want to make sure that we're starting from a blank
      // slate:
      browser.refresh();
    });

    it("should display NaN when no operands are entered", async function () {
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a first operand is entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        firstOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a second operand is entered", async function () {
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        secondOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display the correct result when two operands are entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      const operand1 = this.superCalculator.randomDigit;
      const operand2 = this.superCalculator.randomDigit;

      await this.superCalculator.sendInputData(firstOperandInput, operand1);
      await this.superCalculator.sendInputData(secondOperandInput, operand2);

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(
        (operand1 + operand2).toString()
      );
    });
  });

  describe("subtraction operation", () => {
    beforeEach(function () {
      this.superCalculator = new SuperCalculator();
      this.superCalculator.get(url);
      this.superCalculator.selectOperation(SUBTRACTION_OPERATOR);
    });

    afterEach(function () {
      // Refreshing after each because the calculation result
      // h2 remains on the screen after each calculcation, and
      // we want to make sure that we're starting from a blank
      // slate:
      browser.refresh();
    });

    it("should display NaN when no operands are entered", async function () {
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a first operand is entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        firstOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a second operand is entered", async function () {
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        secondOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display the correct result when two operands are entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      const operand1 = this.superCalculator.randomDigit;
      const operand2 = this.superCalculator.randomDigit;

      await this.superCalculator.sendInputData(firstOperandInput, operand1);
      await this.superCalculator.sendInputData(secondOperandInput, operand2);

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(
        (operand1 - operand2).toString()
      );
    });
  });

  describe("multiplication operation", () => {
    beforeEach(function () {
      this.superCalculator = new SuperCalculator();
      this.superCalculator.get(url);
      this.superCalculator.selectOperation(MULTIPLICATION_OPERATOR);
    });

    afterEach(function () {
      // Refreshing after each because the calculation result
      // h2 remains on the screen after each calculcation, and
      // we want to make sure that we're starting from a blank
      // slate:
      browser.refresh();
    });

    it("should display NaN when no operands are entered", async function () {
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a first operand is entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        firstOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a second operand is entered", async function () {
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        secondOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display the correct result when two operands are entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      const operand1 = this.superCalculator.randomDigit;
      const operand2 = this.superCalculator.randomDigit;

      await this.superCalculator.sendInputData(firstOperandInput, operand1);
      await this.superCalculator.sendInputData(secondOperandInput, operand2);

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(
        (operand1 * operand2).toString()
      );
    });
  });

  describe("division operation", () => {
    beforeEach(function () {
      this.superCalculator = new SuperCalculator();
      this.superCalculator.get(url);
      this.superCalculator.selectOperation(DIVISION_OPERATOR);
    });

    afterEach(function () {
      // Refreshing after each because the calculation result
      // h2 remains on the screen after each calculcation, and
      // we want to make sure that we're starting from a blank
      // slate:
      browser.refresh();
    });

    it("should display NaN when no operands are entered", async function () {
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a first operand is entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        firstOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display NaN when only a second operand is entered", async function () {
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      await this.superCalculator.sendInputData(
        secondOperandInput,
        this.superCalculator.randomDigit
      );

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(NaN.toString());
    });

    it("should display the correct result when two operands are entered", async function () {
      const firstOperandInput = this.superCalculator.firstOperandInput;
      const secondOperandInput = this.superCalculator.secondOperandInput;
      const goButton = this.superCalculator.goButton;
      const calculationResult = this.superCalculator.calculationResult;

      const operand1 = this.superCalculator.randomDigit;
      const operand2 = this.superCalculator.randomDigit;

      await this.superCalculator.sendInputData(firstOperandInput, operand1);
      await this.superCalculator.sendInputData(secondOperandInput, operand2);

      goButton.click();

      await this.superCalculator.waitForElementPresence(calculationResult);

      expect(calculationResult.getText()).toBe(
        (operand1 / operand2).toString()
      );
    });
  });
});
