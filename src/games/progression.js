import randomInteger from '../randomnumber.js';

const Conditions = 'What number is missing in the progression?';
const GameFunction = () => {
  const ProgressionArr = [];
  ProgressionArr.length = randomInteger(5, 10);
  const ProgressionStep = randomInteger(1, 10);
  ProgressionArr[0] = randomInteger(0, 100);
  for (let i = 1; i < ProgressionArr.length; i += 1) {
    ProgressionArr[i] = ProgressionArr[i - 1] + ProgressionStep;
  }
  const MissingNumber = randomInteger(0, ProgressionArr.length - 1);
  const CorrectAnswer = String(ProgressionArr[MissingNumber]);
  ProgressionArr[MissingNumber] = '..';
  const Question = `${ProgressionArr}`;
  return [Question, CorrectAnswer];
};
export { GameFunction, Conditions };
