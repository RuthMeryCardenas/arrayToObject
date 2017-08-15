// ARRAY TO OBJECT

// Paso 1: Convertir a objeto
function arrayToObject(array2d) {
  var newObject = {};

  for (var i = 0; i < array2d.length; i++){
    newObject[array2d[i][0]] = array2d[i][1];
  }

  return newObject;
}

// Paso 2: Mostrar resultados en consola
console.log('Input: Arreglo bidimensional a convertir');
console.log([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log('Output: Nuevo objeto creado');
console.log(arrayToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));
