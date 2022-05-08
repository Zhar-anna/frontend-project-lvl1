import randomInteger from '../randomnumber.js';

const Conditions = 'Find the greatest common divisor of given numbers.';
const GameFunction = () => {
  const Num1 = randomInteger(0, 100);
  const Num2 = randomInteger(0, 100);
  const Question = `${Num1} ${Num2}`;
  let t;
  let a = Num1;
  let b = Num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  const CorrectAnswer = String(a);
  return [Question, CorrectAnswer];
};
export { GameFunction, Conditions };
