/*ARRAY TO OBJECT*/

//Paso 1: Establecer valores en un arreglo bidimensional
var array2d = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

//Paso 2: Convertir a objeto
function convertToObject(myArray2d) {
  var newObject = {};
  var limit = myArray2d.length;
  
  for (var i = 0; i < limit; ++i){
    newObject[myArray2d[i][0]] = myArray2d[i][1];
  }
  return newObject;
}

//Paso 3: Mostrar resultados en consola
console.log("Input: Arreglo bidimensional a convertir");
console.log(array2d);

console.log("Output: Nuevo objeto creado");
console.log(convertToObject(array2d));
