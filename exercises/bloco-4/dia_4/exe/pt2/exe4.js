//Exercicio 4

function biggerName (name) {
  let biggerIndex = 0;
  for (index in name) {
    if (name[biggerIndex].length < name[index].length) {
      biggerIndex = index;      
    }
  }
  return name[biggerIndex]
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda