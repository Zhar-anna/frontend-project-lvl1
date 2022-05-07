import randomInteger from '../randomnumber.js';

const Conditions = 'Answer "yes" if the number is even, other answer "no"';
const GameFunction = () => {
  const RandomNum = randomInteger(0, 100);
  let result = '';
  if (RandomNum % 2 !== 0) {
    result = 'no';
  } else {
    result = 'yes';
  }
  const CorrectAnswer = result;
  const Question = `${RandomNum}`;
  return [Question, CorrectAnswer];
};
export { GameFunction, Conditions };
