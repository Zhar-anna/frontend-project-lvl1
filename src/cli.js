import readlineSync from 'readline-sync';
export const askName = () => {
const UserName = readlineSync.question('May I have your name? ');
return `Hello, ${UserName}!`;
};

