import randomInteger from '../randomnumber.js';

const Conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const GameFunction = () => {
  const Num = randomInteger(0, 100);
  const Question = `${Num}`;
  let result;
  for (let i = 2; i < Num; i += 1) {
    if (Num % i === 0) {
      result = 'no';
      break;
    }
    result = 'yes';
  }
  const CorrectAnswer = String(result);
  return [Question, CorrectAnswer];
};
export { GameFunction, Conditions };
