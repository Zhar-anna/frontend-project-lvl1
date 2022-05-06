import randomInteger from '../randomnumber.js';

const Conditions = 'What is the result of the expression?';
const GameFunction = () => {
  const Mathoperators = ['+', '-', '*'];
  const Num1 = randomInteger(0, 100);
  const Num2 = randomInteger(0, 100);
  const RandomOperators = randomInteger(0, Mathoperators.length - 1);
  const Operator = Mathoperators[RandomOperators];
  const Question = `${Num1} ${Operator} ${Num2}`;
  let result;
  if (Operator === '+') {
    result = String(Num1 + Num2);
  } else if (Operator === '-') {
    result = String(Num1 - Num2);
  } else if (Operator === '*') {
    result = String(Num1 * Num2);
  }
  const CorrectAnswer = result;
  return [Question, CorrectAnswer];
};
export { GameFunction, Conditions };
