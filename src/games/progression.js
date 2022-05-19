import randomInteger from '../randomnumber.js';
import gameLogic from '../index.js';

const generateProgression = (startStep, step, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startStep + (step * i));
  }
  return progression;
};
const conditions = 'What number is missing in the progression?';
const gameProgression = () => {
  const startStep = randomInteger(1, 10);
  const step = randomInteger(1, 10);
  const progresLength = randomInteger(5, 10);
  const progression = generateProgression(startStep, step, progresLength);
  const missingNumber = randomInteger(0, progresLength - 1);
  const correctAnswer = String(progression[missingNumber]);
  progression[missingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const startGameProgression = () => console.log(gameLogic(gameProgression, conditions));
export default startGameProgression;
