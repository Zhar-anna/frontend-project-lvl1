import randomInteger from '../randomnumber.js';
import gameLogic from '../index.js';

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const gamePrime = () => {
  const question = randomInteger(0, 100);
  const correctAnswer = prime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startGamePrime = () => console.log(gameLogic(gamePrime, conditions));
export default startGamePrime;
