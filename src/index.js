import readlineSync from 'readline-sync';

const GameLogic = (GameFunction, Conditions) => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log(Conditions);

  const CounterCorrectAnswer = 3;
  for (let i = 1; i <= CounterCorrectAnswer; i += 1) {
    const [Question, CorrectAnswer] = GameFunction();
    console.log(`Question: ${Question}`);
    const UserAnswer = readlineSync.question('You answer: ');
    if (UserAnswer !== CorrectAnswer) {
      console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${CorrectAnswer}'\nLet's try again, ${UserName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${UserName}!`);
};
export default GameLogic;
