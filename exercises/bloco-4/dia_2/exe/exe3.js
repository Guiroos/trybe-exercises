let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  somaNumber = somaNumber + numbers[index];
}

let mediaNumber = somaNumber / numbers.length ;
console.log(mediaNumber);


/* for (let index = 0; index < numbers.length; index += 1) {
   mediaNumber += ((numbers[index])/(numbers.length));
 }
 console.log(mediaNumber); */