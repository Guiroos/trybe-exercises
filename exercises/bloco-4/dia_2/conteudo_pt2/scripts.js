var numero = 7;
let taboada = [];

for (let index = 1 ; index <= 9 ; index++) {
  console.log("")
  console.log(numero * index);
}

/* for (let index = 1 ; index <= 9 ; index++) {
  numeroMultiplicado = numero * index;
  taboada.push(numeroMultiplicado);
}

console.log(taboada); */

var listaDeNomes = ["Joana", "Maria", "Lucas"];

for (var index = 0; index < listaDeNomes.length; index++){
  var mensagem = "Boas vindas, " + listaDeNomes[index] + "!";
  console.log(mensagem);
}

//Utilizar o += ao invés do ++ para evitar bugs