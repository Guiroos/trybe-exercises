//Exercicio 5

function repeatingNumbers (numbers) {
  let addNumber = 0;
  for(let index in numbers) {
    for (let index2 in numbers) {
      let checkNumber = numbers[index];
      if (checkNumber === numbers[index2]) {
        addNumber += 1;
      }

    }
    if (addNumber > )
  }

}

console.log(repeatingNumbers([2, 3, 2, 5, 8, 2, 3]));