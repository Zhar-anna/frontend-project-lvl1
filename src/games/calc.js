import generateRandomNumber from '../randomnumber.js';
import gameLogic from '../index.js';

const rules = 'What is the result of the expression?';
const mathoperators = ['+', '-', '*'];
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Unknown symbol';
  }
};
const gameCalc = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const indexrandomOperators = generateRandomNumber(0, mathoperators.length - 1);
  const operator = mathoperators[indexrandomOperators];
  const question = `${num1} ${operator} ${num2}`;

  const correctAnswer = calculate(num1, num2, operator).toString();
  return [question, correctAnswer];
};
export default () => gameLogic(gameCalc, rules);
