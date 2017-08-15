/*ARRAY TO OBJECT*/

/* Solución 1: Usando método "reduce()" */
var myArray = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]; //Arreglo bidimensional

var myObject = myArray.reduce(function(obj, element) {
  obj[element[0]] = element[1];

  return obj;
}, {});

//Mostrar en consola
  // console.log(myObject);
  // document.write(myObject);
  document.write(showObject (myObject));
  
function showObject (myObject){
  var result = "{<br>";
  for (var element in myObject)
  {
    result += element + ": " + myObject[element]+"<br>";
  }
  return result + "}";
}
