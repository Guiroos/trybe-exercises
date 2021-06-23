// Exercicio 1

let a = 5;
let b = 2;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log("O resultado da adição foi",adicao);
console.log("O resultado da subtracao foi",subtracao);
console.log("O resultado da multiplicacao foi",multiplicacao);
console.log("O resultado da divisao foi",divisao);
console.log("O resultado do modulo foi",modulo);
console.log();

// Exercicio 2

let valor1 = 55;
let valor2 = 51;

if (valor1 > valor2) {
  console.log("O", valor1, "é maior valor.");
}
else {
  console.log("O", valor2, "é maior valor.");
}
console.log();

// Exercicio 3

let valor3 = 100;
let valor4 = 84;
let valor5 = 555;

if (valor3 > valor4 && valor3 > valor5) {
  console.log("O", valor3, "é maior valor.");
}
else if (valor4 > valor3 && valor4 > valor5) {
  console.log("O", valor4, "é maior valor.");
}
else {
  console.log("O", valor5, "é maior valor.");
}
console.log();

// Exercicio 4

let pnz = 0;

if (pnz > 0) {
  console.log("Positive");
}
else if (pnz < 0) {
  console.log("Negative");
}
else {
  console.log("Zero");
}
console.log();

// Exercicio 5

let angulo_1 = 50;
let angulo_2 = 100;
let angulo_3 = 30;
let somaAngulo = angulo_1 + angulo_2 + angulo_3;

if (angulo_1 > 0 && angulo_2 > 0 && angulo_3 > 0 && somaAngulo == 180) {
  console.log("True");
}
else {
  console.log("False");
}
console.log();

// Exercicio 6

let pecaXadrez = "rambo";
let pecaXadrezLc = pecaXadrez.toLocaleLowerCase(); 


switch(pecaXadrezLc) {
  case "king":
    console.log("Move to a neighboring square.");
    break

  case "queen":
    console.log("Move in all directions.");
    break

  case "rook":
    console.log("Move in a row or line.");
    break

  case "bishop":
    console.log("Move in diagonals.");
    break

  case "knight":
    console.log("Move in a L shape.");
    break

  case "pawn":
    console.log("Move one square straight ahead.");
    break

  default:
    console.log("There is no piece like that in Chess.")
}
console.log();

// Exercicio 7

let notaPercentage = 100;
 
if (notaPercentage >= 90 && notaPercentage <= 100) {
  console.log("Sua nota foi A.");
}
else if (notaPercentage >= 80 && notaPercentage < 90) {
  console.log("Sua nota foi B.");
}
else if (notaPercentage >= 70 && notaPercentage < 80) {
  console.log("Sua nota foi C.");
}
else if (notaPercentage >= 60 && notaPercentage < 70) {
  console.log("Sua nota foi D.");
}
else if (notaPercentage >= 50 && notaPercentage < 60) {
  console.log("Sua nota foi E.");
}
else if (notaPercentage < 50 && notaPercentage >= 0) {
  console.log("Sua nota foi F.");
}
else {
  console.log("Nota não válida.")
}
console.log();

// Exercicio 8

let numEven1 = 1;
let numEven2 = 13;
let numEven3 = 27;

if (numEven1%2 == 0 || numEven2%2 == 0 || numEven3%2 == 0) {
  console.log("True")
}
else {
  console.log("False");
}
console.log();

// Exercicio 9

let numOdd1 = 2;
let numOdd2 = 14;
let numOdd3 = 28;

if (numOdd1%2 != 0 || numOdd2%2 != 0 || numOdd3%2 != 0) {
  console.log("True")
}
else {
  console.log("False");
}
console.log();

// Exercicio 10
