"use strict";

//Crear una función que reciba dos parámetros: cantidad y un arreglo de números. 
//La función debera retornar un arreglo del tamaño definido en el parámetro cantidad con números aleatorios entre 1 y 100 
//que no se repitan y que no existan en el arreglo del segúndo parámetro. Agregue las validaciones que considere necesarias a los parámetros de entrada.
var min = 1;
var max = 5;
var longitud = 4;

function aletatorio(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var array = [];

for (var i = 0; i < longitud; i++) {
  array.push(aletatorio(min, max));

  for (var j = i + 1; j < longitud; j++) {
    if (array[j] === array[i]) {
      array[j] = array.splice();
    }

    for (var k = 0; k < longitud; k++) {
      if (array[k] === array[i]) {
        array[k] = array.splice();
      }
    }

    array.push(aletatorio(min, max));
  }
}

console.log(array);