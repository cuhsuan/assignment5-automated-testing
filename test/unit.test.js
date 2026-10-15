const test = require('node:test');
const assert = require('node:assert/strict');
const c = require('../src/calculator');
test('addition', () => assert.equal(c.add(2, 3), 5));
test('subtraction', () => assert.equal(c.subtract(5, 2), 3));
test('multiplication', () => assert.equal(c.multiply(3, 4), 12));
test('division', () => assert.equal(c.divide(8, 2), 4));
test('division by zero', () => assert.throws(() => c.divide(1, 0), /Division by zero/));
