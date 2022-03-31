
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let arrOfNumbers = [10, 20, 30];
for (let number of arrOfNumbers) {
  number += 1;
  console.log(number);
}
// 11
// 21
// 31

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]