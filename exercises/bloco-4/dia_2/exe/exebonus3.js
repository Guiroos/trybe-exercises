let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let secondIndex = 0;
let index = 1;

for (index; index <= numbers.length; index += 1) {

  if (index == numbers.length){
    newArray.push(numbers[index - 1] * 2);
  }
  else{
    for(secondIndex; secondIndex < index; secondIndex += 1) {
      newArray.push(numbers[secondIndex] * numbers[index]); 
    }
  }
}

console.log(newArray)

//Gabarito
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray); */