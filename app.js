//ARRAY TO OBJECT
//Solución 1: Usando método "reduce()"
var myArray = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

var myObject = myArray.reduce(function(obj, element) {
  obj[element[0]] = element[1];

  return obj;
}, {});

// document.write(myObject);
console.log(myObject);
