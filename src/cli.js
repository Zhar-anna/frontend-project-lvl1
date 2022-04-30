import readlineSync from 'readline-sync';

const askName = () => {
  const UserName = readlineSync.question('May I have your name? ');
  return `Hello, ${UserName}!`;
};
export default askName;
