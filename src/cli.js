import readlineSync from 'readline-sync';
const UserName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${UserName}!`);

