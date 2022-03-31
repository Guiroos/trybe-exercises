let numero = 7;
let taboada = [];

for (let index = 1 ; index <= 9 ; index += 1) {
  numeroMultiplicado = numero * index;
  taboada.push(numeroMultiplicado);
}

console.log(taboada);

const listaDeNomes = ["Joana", "Maria", "Lucas"];

/* for (var index = 0; index < listaDeNomes.length; index++){
  var mensagem = "Boas vindas, " + listaDeNomes[index] + "!";
  console.log(mensagem);
} */

for (let names of listaDeNomes) {
  let mensagem = `Boas vindas ${names}!`
  console.log(mensagem);
}

//Utilizar o += ao invés do ++ para evitar bugs