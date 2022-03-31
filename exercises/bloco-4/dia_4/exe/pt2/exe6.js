function factorialSum(number) {
  let sum = 0;
  for (let index = 0 ; number > index; number -= 1) {
    sum += number;
  }
  return sum;
}

console.log(factorialSum(10));