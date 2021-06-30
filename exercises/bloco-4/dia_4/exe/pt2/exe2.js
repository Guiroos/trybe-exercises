//Exercicio 2

function maiorNumero (array) {
  let indiceMaior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > indiceMaior) {
      indiceMaior = index;
    }
  }
  return indiceMaior;
}
console.log(maiorNumero([2, 4, 6, 7, 10, 0, -3]));


function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]))
