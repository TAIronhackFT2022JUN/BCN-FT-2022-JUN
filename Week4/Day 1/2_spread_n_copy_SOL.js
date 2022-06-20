//3.
//Cambia esta funcion para que new Array devuelva:
//Parametros arr = [1,2,3] num = 3
//retorna [[1,2,3],[1,2,3],[1,2,3]]
//El array parametro 3 veces dentro de newArr
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    //SOLUCION 1 - OBVIA
    newArr.push(...arr);

    ////SOLUCION 2 - Wiiiii | Esto full trampa para que no nos pille la última coma, pasando de spread&copy
    /*if(num >= 2){
      newArr += "["+arr+"],";
    }else{
      newArr += "["+arr+"]";
    }*/

    //SOLUCION 3 - Si estuvieramos en codewars, el newArr.push(...arr) no pasaríamos test, así que otra trampa para el resultado que tenemos en línia 36
    //OUTPUT - // => [[1,2,3],[1,2,3]]

    // if (num >= 2) {
    //   newArr += "[" + [...arr] + "],";
    // } else {
    //   newArr += "[" + [...arr] + "]";
    // }

    // Only change code above this line
    num--;
  }
  console.log("arr: ", arr);
  console.log("newArr: ", newArr);
  return newArr;
}

console.log(copyMachine([1, 2, 3], 2)); // => [[1,2,3],[1,2,3]]
console.log(copyMachine([1, 2, 3], 3)); // => [[1,2,3],[1,2,3],[1,2,3]]

//2.Haz una variable que sea una deepCopy de esta estructura
//Cambia el valor de country por 'brasil'
//El valor de ciudad por 'Sao Paulo'
//Haz un console log para ver que no se ha cambiado el original

//https://codingpotions.com/deep-copy-javascript
//structuredClone -> https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

const data = {
  name: {
    firstName: "ana",
    lastName: "marino",
  },
  isStudent: true,
  favoriteFootballTeam: "fc barcelona",
  hometown: {
    city: "buenos aires",
    country: "argentina",
  },
};

//el sigiuente mensaje es para que no nos salte error en codesandbox (saldrá en rojo la structuredClone si la quitamos, probad)
/* eslint-disable */
let deepCopy = structuredClone(data);
deepCopy.hometown.city = "Sao Paulo";
console.log(deepCopy);
//console.log(data)
