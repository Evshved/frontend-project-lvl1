import readlineSync from 'readline-sync';

export const askNameInit = () => {
    const name = readlineSync.question('May I have your name?  ');
    console.log(`Hi, ${name}!`)
}