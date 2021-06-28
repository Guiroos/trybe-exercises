let n = 5;
let symbol = "*";
let inputLine = "";

if (n > 1) {
  
  for (let linha = 0; linha < n; linha += 1) {
    inputLine = inputLine + symbol;
    console.log(inputLine);
  }
} else {
  console.log("O número de 'n' deve ser maior que 0");
}
