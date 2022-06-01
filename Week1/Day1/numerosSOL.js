//Dado un numero de varios decimales ej. 3.23903, busca la manera de forzar solo dos decimales => 3.24
let num = 3.23903;

//Método 1
//toFixed te lo convierte a String, por eso hay que usar Number() delante o un "+"
console.log(+num.toFixed(2));
console.log(Number(num.toFixed(2)));

//Método 2
//pasar a string y usar slice
let num2 = num.toString();
console.log(num2.slice(0, 4));

//---------------------------------------------------------------------------------------------------

//Genera un numero aleatorio de 2 a 5 usando Math.random (dificil ;)
//Math.random() * (max - min + 1) + min
//https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
var randomNumber = Math.floor(Math.random() * (5 - 2 + 1) + 2);
console.log(randomNumber);
