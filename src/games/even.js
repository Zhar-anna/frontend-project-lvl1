import generateRandomNumber from '../randomnumber.js';
import gameLogic from '../index.js';

const isEven = (num) => num % 2 === 0;
const rules = 'Answer "yes" if the number is even, other answer "no"';
const gameEven = () => {
  const randomNum = generateRandomNumber(1, 100);
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameLogic(gameEven, rules);
