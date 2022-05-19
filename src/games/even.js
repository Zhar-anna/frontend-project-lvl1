import randomInteger from '../randomnumber.js';
import gameLogic from '../index.js';

const parityCheck = (num) => num % 2 === 0;
const conditions = 'Answer "yes" if the number is even, other answer "no"';
const gameEven = () => {
  const randomNum = randomInteger(1, 100);
  const question = `${randomNum}`;
  const correctAnswer = parityCheck(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGameEven = () => console.log(gameLogic(gameEven, conditions));
export default startGameEven;
