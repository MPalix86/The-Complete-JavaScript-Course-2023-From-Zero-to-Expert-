const firstName = 'mirco';
const birthYear  = 1995;
const job = 'programmer'
const now = 2023;


// questo è quello che si faceva prima di ES6
const string = "i'm " + firstName + ' a ' + (now - birthYear) + ' ' + job;
console.log(string)

// ora con ES6 abbiamo uno strumento migliore per fare questo che si chiama template literals
// che ci permette di scrivere stringhe e variabili insieme in maniera molto piu naturale e si fa usando le backtips (``) (right option + ?)
const newString = `i'm ${firstName} a ${now - birthYear} programmer`
console.log(newString)

// i `` possone essere usati anche per le stringhe normali
console.log(`sono una stringa normale `);

// multine line  string prima di ES6
console.log('multi \n\
line \n\
string');

// multi line string dopo ES6
console.log(`multi 
line
string`)
