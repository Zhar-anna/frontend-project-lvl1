import gameLogic from '../index.js';
import randomInteger from '../randomnumber.js';

const conditions = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const gameGcd = () => {
  const num1 = randomInteger(0, 100);
  const num2 = randomInteger(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
const startGameGcd = () => console.log(gameLogic(gameGcd, conditions));
export default startGameGcd;
