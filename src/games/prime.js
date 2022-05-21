import randomInteger from '../randomnumber.js';
import gameLogic from '../index.js';

const prime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0 || num < 2) {
      return false;
    }
  }
  return true;
};

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamePrime = () => {
  const randomNum = randomInteger(1, 100);
  const question = `${randomNum}`;
  const correctAnswer = prime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => gameLogic(gamePrime, conditions);
