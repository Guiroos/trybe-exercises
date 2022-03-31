let fruits = [3, 4, 5, 1, 1];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log("Valor da soma é " + sum);
}
else {
  console.log("Valor da soma menor que 16");
}