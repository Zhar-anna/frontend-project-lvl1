import randomInteger from '../randomnumber.js';

const conditions = 'What number is missing in the progression?';
const gameFunction = () => {
  const progressionArr = [];
  progressionArr.length = randomInteger(5, 10);
  const progressionStep = randomInteger(1, 10);
  progressionArr[0] = randomInteger(0, 100);
  for (let i = 1; i < progressionArr.length; i += 1) {
    progressionArr[i] = progressionArr[i - 1] + progressionStep;
  }
  const missingNumber = randomInteger(0, progressionArr.length - 1);
  const correctAnswer = String(progressionArr[missingNumber]);
  progressionArr[missingNumber] = '..';
  const question = progressionArr.join(' ');
  return [question, correctAnswer];
};
export { gameFunction, conditions };
