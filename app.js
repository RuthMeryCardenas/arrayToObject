// OBJECT TO ARRAY

// Paso 1: Convertir a array
function objectToArray(obj) {
  var array2d = [];

  arrayKeys = Object.keys(obj);
  arrayValues = Object.values(obj);

  for (var i = 0; i < arrayKeys.length; i++) {
    array2d.push([arrayKeys[i], arrayValues[i]]);
  }

  return array2d;
}

// Paso 2: Mostrar resultados en consola
console.log('Input: Objeto a convertir');
console.log({name : 'Juan Pérez', age : 25, profession : 'Full stack developer'});
console.log('Output: Nuevo arreglo bidimensional');
console.log(objectToArray({name : 'Juan Pérez', age : 25, profession : 'Full stack developer'}));
