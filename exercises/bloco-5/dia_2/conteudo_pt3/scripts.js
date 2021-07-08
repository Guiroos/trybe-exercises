let pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  let criancaAtual = pai.childNodes[index];

  if (criancaAtual.id !== 'elementoOndeVoceEsta') {
    criancaAtual.remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();