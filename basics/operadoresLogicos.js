/* Operadores logicos booleanos (AND && y OR ||) */

// Operador logico OR ||
console.log(false || true);
// true

/* El operador logico OR siempre elegira el valor que nos de true, esto sucedera siempre y cuando
haya por lo menos un solo true. De lo contrario si la condicion es (false || false) nos dara como resultado
false. Entonces para que nos de false con el operador OR todos los valores deben de ser false. */

// Operador logico AND &&
console.log(true || false);
// false

/* El operador logico AND solamente evalua los valores que nos dan false, si te puedes dar cuenta es lo
contrario al caso del operador OR que solo devuelve true si hay un solo valor que sea true.
Pero en caso de que todos los valores de nuestra condicion AND sean true, sera cuando nos arrojara como resultado
un valor true al toda la condicion cumplirse definitivamente. Ejemplos... */

console.log(true || true);
// true
console.log(true && true);
// false
console.log(true || false);
// true
console.log(true && false);
// false

/* Tambien podemos utilizar los dos operadores logicos a la vez utilizando nuestros parentesis (), para que
le indiquemos al codigo que debe evaluar primero y hacer todo en orden y asi darle sentido a que se debe
de ejecutar primero para obtener un resultado esperado. */

console.log(((false || true) && true && true) || false);
// true
console.log(((true && false) || true) && false && true);
// false
