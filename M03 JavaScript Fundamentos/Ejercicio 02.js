/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
  return string;
   // Debe retornar un string.
   // Tu código:
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return(x+y);
   x=3;
   y=4;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return(x-y);
   x=4;
   y=3;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return(x/y);
   x=4;
   y=2;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return(x*y);
   x=3;
   y=2;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return(x%y);
   x=10;
   y=3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
