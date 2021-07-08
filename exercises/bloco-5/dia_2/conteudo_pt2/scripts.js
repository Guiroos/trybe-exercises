let pai = document.querySelector('#pai');
let irmao1 = document.createElement('div');
irmao1.innerText = 'olaaa sou seu novo irmão';
pai.appendChild(irmao1);

let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filho1 = document.createElement('span');
filho1.innerText = 'aonde sera que estou';
ondeVoceEsta.appendChild(filho1);

let primeiroFilhoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filho2 = document.createElement('span');
filho2.innerText = 'meu deus, uma maquina de fazer filhos';
primeiroFilhoFilho.appendChild(filho2);

console.log(document.querySelector('#primeiroFilhoDoFilho span').parentNode.parentNode.nextSibling.nextSibling);