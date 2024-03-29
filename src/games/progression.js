import generateRandomNumber from '../randomnumber.js';
import gameLogic from '../index.js';

const generateProgression = (startStep, step, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startStep + (step * i));
  }
  return progression;
};
const rules = 'What number is missing in the progression?';
const gameProgression = () => {
  const startStep = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 10);
  const progresLength = generateRandomNumber(5, 10);
  const progression = generateProgression(startStep, step, progresLength);
  const missingNumber = generateRandomNumber(0, progresLength - 1);
  const correctAnswer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => gameLogic(gameProgression, rules);
