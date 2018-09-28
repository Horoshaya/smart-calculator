class SmartCalculator {
  constructor(initialValue) {
    this.expression = initialValue;
    this.toString = function() { return eval(this.expression); }
  }

  add(number) {
    this.expression += "+" + number;
    return this;
  }
  
  subtract(number) {
    this.expression += "-" + number;
    return this;
  }

  multiply(number) {
    this.expression += "*" + number;
    return this;
  }

  devide(number) {
    this.expression += "/" + number;
    return this;
  }

  pow(number) {
    this.expression += "**" + number;
    return this;
  }
}
module.exports = SmartCalculator;
