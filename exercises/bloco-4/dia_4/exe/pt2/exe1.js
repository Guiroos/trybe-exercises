//Exercicio 1

function verificarPalindrome (word) {
  for(let index in word) {
    if (word[index] != word[(word.length - 1) - index]) {
      return false;
    } 
  }
  return true;
}

console.log(verificarPalindrome('ama'));
