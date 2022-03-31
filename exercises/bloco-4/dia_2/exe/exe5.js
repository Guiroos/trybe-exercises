let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];

/* for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
} */

for (let number of numbers) {
  if (number > maiorNumero) {
    maiorNumero = number;
  }
}

console.log(maiorNumero);