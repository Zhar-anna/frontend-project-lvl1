import generateRandomNumber from '../randomnumber.js';
import gameLogic from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gamePrime = () => {
  const randomNum = generateRandomNumber(2, 100);
  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => gameLogic(gamePrime, rules);
