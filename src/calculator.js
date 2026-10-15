function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Coverage Gate 測試：刻意不新增對應的單元測試
function classifyNumber(n) {
  if (n > 0) return 'positive';
  if (n < 0) return 'negative';
  return 'zero';
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  classifyNumber
};
