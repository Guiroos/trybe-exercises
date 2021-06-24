/* //if - se
//else -senão

if (condicao) {
  //codigo
}
else if (outraCondicao){
  //outra condiacao
}
else if (outraCondicao){
  //outra condiacao
}
else {
  //condicao
} */


//exemplo video

let trybe = 19.40;

if (trybe >= 14 && trybe < 14.40) {
  console.log("Esquenta")
}
else if (trybe >= 16.30 && trybe < 17.50) {
  console.log("Aula ao vivo")
}
else if (trybe >= 19.40 && trybe < 20) {
  console.log("Fechamento")
}
else {
  console.log("Fora dos momentos síncronos")  
}