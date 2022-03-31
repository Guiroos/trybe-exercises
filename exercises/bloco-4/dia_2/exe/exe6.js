let numbers = [2, 10, 5, 18, 70, 8, 100, 2, 34, 28];
let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {

  if (numbers[index] % 2 != 0) {
    oddNumbers += 1;
  }
}

if (oddNumbers >= 1) {
  console.log("Econtrado " + oddNumbers + " número(s) ímpar(es).");
} 
else {
  console.log("Nenhum valor ímpar encontrado.");
}
