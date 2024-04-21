// union dapat memungkinkan kita membuat variable lebih dari satu tipe data 

let randomNumber: string | number | boolean;

randomNumber = "30";
console.log(randomNumber);

randomNumber = 30;
console.log(randomNumber);

randomNumber = true;
console.log(randomNumber)