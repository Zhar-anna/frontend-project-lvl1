import randomInteger from '../randomnumber.js';
import gameLogic from '../index.js';

const conditions = 'What is the result of the expression?';
const calculate = (num1, num2, operat) => {
  switch (operat) {
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
  const mathoperators = ['+', '-', '*'];
  const num1 = randomInteger(0, 100);
  const num2 = randomInteger(0, 100);
  const randomOperators = randomInteger(0, mathoperators.length - 1);
  const operator = mathoperators[randomOperators];
  const question = `${num1} ${operator} ${num2}`;

  const correctAnswer = calculate(num1, num2, operator).toString();
  return [question, correctAnswer];
};
const startGameCalc = () => console.log(gameLogic(gameCalc, conditions));
export default startGameCalc;
