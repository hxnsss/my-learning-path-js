console.log(null == undefined);
// → true
console.log(null == 0);
// → false

/* Este comportamiento es frecuentemente util. Cuando queremos probar si un
valor tiene un valor real en vez de null o undefined, puedes compararlo con
null usando el operador == (o !=). 

Pero que pasa si queremos probar que algo se refiere precisamente al valor
false? Las reglas para convertir strings y números a valores Booleanos, dice
que 0, NaN, y el string vació ("") cuentan como false, mientras que todos
los otros valores cuentan como true. */

/* Si queremos comparar un valor y queremos devolver un valor que sea true, en caso de que el otro sea false.
 En este caso, "" es false y "usuario" true, entonces nos devolveria "usuario" */

console.log("usuario" || "");

/* Ocurre lo mismo con AND, solo que al reves, devuelve solo un valor que sea false y no true.
En este caso, "" es flase y "usuario" true, solo evaluaria su valor vacio como false, ya que no hay mas
valores positivos. */

console.log("usuario" && "");
