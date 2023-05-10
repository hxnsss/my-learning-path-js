/* Concatenacion de strings con el operador (+) */

// String sin concatenar
console.log("Hola me llamo Hans");

// Strings concatenados
console.log("Hola me" + " llamo Hans");

/* Tener en cuenta que los String se pueden definir de las siguientes maneras "", '', ``.
Aclarar que usar "" o '' es lo mismo, pero si utilizamos las comillas de acento grave es posible
crear saltos de linea entre codigo sin causar un error de syntaxis en nuestro codigo y sin utilizar \n
al mismo tiempo que nos permite ejecutar codigo dentro de una misma cadena de texto utilizando ${}.
*/
console.log(`Hola
como
estas`);

console.log(`Aqui hay una suma de 4 + 4 = ${4 + 4}`);
