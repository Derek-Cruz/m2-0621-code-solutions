const add = require('./add');
const divide = require('./divide')
const multiply = require('./multiply')
const subtract = require('./subtract')

const num1 = process.argv[2];
const num2 = process.argv[4];
const op = process.argv[3];

function testing(num1, op, num2) {
  if (op === 'plus') {
    console.log('result:', add(num1, num2));
  } else if (op === 'minus') {
    console.log('result:', subtract(num1, num2));
  } else if (op === 'times') {
    console.log('result:', multiply(num1, num2));
  } else if (op === 'over') {
    console.log('result:', divide(num1, num2));
  }
}

testing(num1, op, num2)
