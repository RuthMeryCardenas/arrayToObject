/*ARRAY TO OBJECT*/

/* SOLUCIÓN 1 "Usando método array.reduce()" */

//Paso 1: Convertir a objeto
var array2d = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]; //Arreglo bidimensional

var myObject = array2d.reduce(function(obj, element) {
  obj[element[0]] = element[1];
  return obj;
}, {});

//Paso 2: Mostrar en pantalla
function showObject (myObject){
  var result = "{<br>";
  for (var element in myObject)
  {
    result += element + ": " + myObject[element]+"<br>";
  }
  return result + "}";
}

document.write(showObject (myObject));
