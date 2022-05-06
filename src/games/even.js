import readlineSync from 'readline-sync';
import randomInteger from '../randomnumber.js';

const ParityCheckGame = () => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log('Answer "yes" if the number is even, other answer "no"');
  let counterCorrectAnswer = 0;
  while (counterCorrectAnswer < 3) {
    const RandomNum = randomInteger(0, 100);
    let CorrectAnswer = '';
    if (RandomNum % 2 !== 0) {
      CorrectAnswer = 'no';
    } else {
      CorrectAnswer = 'yes';
    }
    const result = CorrectAnswer;
    console.log(`Question: ${RandomNum}`);
    const UserAnswer = readlineSync.question('You answer: ');
    if (UserAnswer === result) {
      console.log('Correct!');
      counterCorrectAnswer += 1;
    } else {
      return (`'${UserAnswer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${UserName}!`);
    }
  }
  if (counterCorrectAnswer === 3) {
    return `Congratulations, ${UserName}!`;
  }
};
export default ParityCheckGame;
