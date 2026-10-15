const fs = require('node:fs');
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('src/calculator.js', 'dist/calculator.js');
console.log('Build complete: dist/calculator.js');
