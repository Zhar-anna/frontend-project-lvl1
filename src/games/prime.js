import randomInteger from '../randomnumber.js';
import gameLogic from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i < num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamePrime = () => {
  const randomNum = randomInteger(1, 100);
  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => gameLogic(gamePrime, conditions);
