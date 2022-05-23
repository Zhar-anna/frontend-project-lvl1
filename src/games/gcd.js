import gameLogic from '../index.js';
import generateRandomNumber from '../randomnumber.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const gameGcd = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
export default () => gameLogic(gameGcd, rules);
