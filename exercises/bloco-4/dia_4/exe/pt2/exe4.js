//Exercicio 4

function biggerName (name) {
  let biggerIndex = 0;
  for (let index in name) {
    if (name[biggerIndex].length < name[index].length) {
      biggerIndex = index;      
    }
  }
  return name[biggerIndex]
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maiorPalavra(palavras) {
  let maiorNome = palavras[0];
  for (let indice in palavras) {
    if (maiorNome.length < palavras[indice].length) {
      maiorNome = palavras[indice];
    }
  }
  return maiorNome;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda