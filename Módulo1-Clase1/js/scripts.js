console.log("Hola Soy un Console Log del archivo scripts.js");

var x = 5; //x  es un valor numérico entero

console.log("El valor de la variable x es:", x);

let y = 2;

let c;

console.log(c);

c = x + y;

console.log(c);

let hello = "Hola soy una variable"; //Variable de tipo String

console.log("La variable hello tiene un total de caracteres", hello.length);

const name = "José Mota";

//name = "GoIt";

console.log(hello);

hello = "Hola cambié de valor";

console.log(hello);

let userName = "José Mota";


const yearOfBirth = 1991;
console.log(yearOfBirth);

//Tipos primitivos

const color = 5; //Enteros
const points = 15.8; // Coma Flotante

//String - Es una secuencia de ceros o más caracteres. La cadena comienza y termina con una sola ', o con comillas ".

let description = 'JavaScript para principiantes';
let otherDescription = "JavaScript para principiantes";

/*
Boolean - Es un tipo de datos lógicos, banderas de estado. Sólo hay dos valores: true y false. Por ejemplo, a la pregunta de si la luz de una habitación está encendida o apagada se puede responder con un sí (true) o con un no (false).

true — sí, es cierto, verdadero, 1
false — no, no es cierto, falso, 0
Observe los nombres de las variables que contienen el booleano. Hacen una pregunta y la respuesta es sí o no.
*/

const isLoggedIn = true;
const canMerge = false;
const hadChildren = true;


const zero = 0;
const zeroVoid = null;
let zeroUndefined;


/*
null - Es un valor especial, que esencialmente significa nada. Se utiliza en situaciones en las que es necesario especificar explícitamente un vacío. Por ejemplo, si el usuario aún no ha seleccionado nada, entonces podemos decir que el valor null.
*/
/*
undefined - Es otro valor especial. Por defecto, cuando se declara una variable pero no se inicializa, su valor es indefinido, se le asigna undefined
*/
console.log(typeof zero);
console.log(typeof zeroVoid);
console.log(typeof zeroUndefined);

/*
Operador typeof
Se usa para obtener el tipo de un valor variable. Devuelve en el lugar de su llamada el tipo del valor de la variable especificada tras ella, es una cadena en la que se especifica el tipo
*/

console.log("El tipo de dato de userName es:", typeof userName);
console.log("El tipo de dato de points es:", typeof points);

/*
Hay dos métodos para dar salida a los datos: console.log() y alert(). Entre los paréntesis, especifique el nombre de la variable en donde valor debe imprimirse.
*/

alert("El de valor de userName es: " + userName);