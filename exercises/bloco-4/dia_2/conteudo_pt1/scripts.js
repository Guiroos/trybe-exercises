/* let pizza1 = "4 Queijos";
let pizza2 = "Frango com Catupity";
let pizza3 = "Marguerita";
let pizza4 = "Calabresa";
let pizza5 = "Sorvete";

console.log(pizza1, pizza2, pizza3, pizza4, pizza5);
*/

// Usando array

let pizzas = ["4 Queijos", "Frango com Catupity", "Marguerita", "Calabresa", "Sorvete"];

pizzas.push ("Bacon", "Portuguesa");
pizzas.unshift ("Lombinho");

//.puish empurra um valor dentro do array sem ter problema de sobrescrever um outro valor
//.unshift adiciona um valor no inicio da string
//.pop remove o ultimo valor do array
//.shitt remove o primero valor do array
//.indexOf procura o indice do valor

console.log(pizzas);

//.lenght para ver o tamanho do elemento
//.sort para deixar em ordem alfabética
//[n] para receber somente uma posição do array

for (let index = 0 ; index < pizzas.length ; index++) {
  console.log(pizzas[index])
}


