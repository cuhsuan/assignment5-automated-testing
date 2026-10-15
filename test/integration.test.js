const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const c = require('../dist/calculator');
test('built artifact exists', () => assert.ok(fs.existsSync('dist/calculator.js')));
test('built module end-to-end calculation', () => assert.equal(c.multiply(c.add(2, 3), 4), 20));
