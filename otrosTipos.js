// TIPO DE DATOS PRIMITIVOS
let texto = 'texto';
let numero = 3.534;
let booleano = true;
// Es cuando tenemos una variable a la que no declaramos a ningun tipo de dato.
let indefinido; // undefined

// No muy utilizados
// let bigInt = BigInt(3456987654345678765);
let bigInt = BigInt(8765476798000097867);
// console.log(bigInt);
// Lo que hace es que garantixar que sea un valor unico totalmente y nunca se a
// utilizado en proyectos de codigo pero es bueno de su existencia.
let symbol = Symbol('Symbolo');
// let symbol2 = Symbol('Symbolo');
// console.log(symbol === symbol2);

// TIPOS DE DATOS ESTRUCTURALES
// objetos
let objeto = { nombre: 'Xavier' }; // Objeto -> objeto[0] new Object()
let lista = [ 'Xavier']; // Array -> tambien es un objeto lista[0] new Array()
// Es cuando un lenguaje disfraza a un objeto utilizando otros simbolos para que
// sean mas faciles utilizarlos pero realmente es un objeto detras de escena.
let regex = /asd/; // new RegExp()
// objeto, Array, Map, Set,WeakSet, Date, RegExp

let funcion = function() {};

// RAIZ ESTRUCTURAL PRIMITIVO
let nulo = null;

console.log('texto es: ' + typeof texto);
console.log('numero es: ' + typeof numero);
console.log('booleano es: ' + typeof booleano);
console.log('indefinido es: ' + typeof indefinido);
console.log('bigInt es: ' + typeof bigInt);
console.log('symbol es: ' + typeof symbol);
console.log('objeto es: ' + typeof objeto);
console.log('lista es: ' + typeof lista);
console.log('funcion es: ' + typeof funcion);
console.log('nulo es ' + typeof nulo);