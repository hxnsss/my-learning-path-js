/* Comparadores de comparacion con (==, !=, ===, !==, <, >, <=, >=) */

// Comparador mayor < y menor que >
console.log(5 < 3);
// true
console.log(5 > 3);
// false

// Comparadores de igualdad estricta === y no estricta ==
console.log(5 == "5"); // no estricta
// true
console.log(5 === "5"); // estricta
// false

/* Es recomendado no usar el operador de igualdad "no estricto", ya que nos puede causar
 confusión en ciertos casos especificos. No significa que no debemos utilizarlo, pero si
 tener en cuenta EN QUE lo utilizamos.*/

// Comparador distinto que "no estricto" != y comparador es distinto que !== (estricto)
console.log(5 != 3);
// true
console.log(5 != "5");
// false
console.log(5 !== "5");
// true

/* En este caso sucede lo mismo que en nuestro anterior caso,
el comparador es distinto que, estricto y no estricto, deben usarse en casos especificos, ya que pueden causar
un error o un resultado NO ESPERADO en nuestro codigo. Ya dependiendo de su uso pueden dar resultados diferentes */

// Comparador mayor o igual que <= y menor o igual que >=
console.log(5 <= 4);
// true
console.log(5 >= 5);
// true
console.log(5 <= 6);
// false
console.log(5 >= 6);
// true
