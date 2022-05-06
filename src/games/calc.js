import readlineSync from 'readline-sync';
import randomInteger from '../randomnumber.js';

const Calculator = () => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}!`);
  console.log('What is the result of the expression?');
  let CounterCorrectAnswer = 0;
  while (CounterCorrectAnswer < 3) {
    const Mathoperators = ['+', '-', '*'];
    const Num1 = randomInteger(0, 100);
    const Num2 = randomInteger(0, 100);
    const RandomOperators = randomInteger(0, Mathoperators.length - 1);
    const Operator = Mathoperators[RandomOperators];
    const example = `${Num1} ${Operator} ${Num2}`;
    let CorrectAnswer = 0;
    console.log(`Question: ${example}`);
    const UserAnswer = readlineSync.question('You answer: ');
    switch (Operator) {
      case '+':
        CorrectAnswer = String(Num1 + Num2);
        break;
      case '-':
        CorrectAnswer = String(Num1 - Num2);
        break;
      case '*':
        CorrectAnswer = String(Num1 * Num2);
        break;
      default:
        console.log('Unknown State');
        break;
    }
    const result = CorrectAnswer;
    if (UserAnswer === result) {
      console.log('Correct!');
      CounterCorrectAnswer += 1;
    } else {
      return (`'${UserAnswer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${UserName}!`);
    }
  }
  if (CounterCorrectAnswer === 3) {
    return `Congratulations, ${UserName}!`;
  }
};
export default Calculator;
