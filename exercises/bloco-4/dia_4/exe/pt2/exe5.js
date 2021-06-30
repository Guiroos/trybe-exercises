//Exercicio 5

function repeatingNumbers(numbers) {
  let addNumber = 0;
  let repeater = 0;
  let indexRepeatingNumber = 0;
  for(let index in numbers) {
    let checkNumber = numbers[index];
    for (let index2 in numbers) {
      if (checkNumber === numbers[index2]) {
        addNumber += 1;
      }
    }
    if (addNumber > repeater) {
      repeater = addNumber;
      indexRepeatingNumber = index;
    }
    addNumber = 0;
  }
  return numbers[indexRepeatingNumber];
}

console.log(repeatingNumbers([2, 3, 2, 5, 8, 2, 3]));