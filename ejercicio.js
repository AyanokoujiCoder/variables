let saludo = "¡Hola Mundo! ";
let nombre = "Angel";

console.log(saludo + "Soy " + nombre);

console.log("Mi nombre en mayúsculas es: " + nombre.toUpperCase());

console.log("Mi nombre en minúsculas es: " + nombre.toLowerCase());

console.log(`El saludo '${saludo}' tiene ${saludo.length} caracteres.`);

let despensa = ["Harina", " Pan", " Huevo", " Leche", " Galletas"];

// Los índices de los arrays comienzan en 0 en lugar de 1.
// Esto se conoce como "indexación basada en cero".

// despensa[0] es "Harina".
// despensa[1] es "Pan".
// despensa[2] es "Huevo". (que es el tercer elemento)

console.log(`La posición 3 del array es: ${despensa[2]}`);

despensa.push(" Queso");

// Mostrar el array actualizado
console.log(`El nuevo elemento añadido al final del array es: ${despensa[despensa.length - 1]}`);

// Mostrar el array completo
console.log(`El contenido actualizado de la despensa es: ${despensa}`);

let frase = "La lluvia en Sevilla es una maravilla";
let buscarPatron = /lluvia/;

// Es una expresión regular, también conocida como regex (del inglés "regular expression").
// Una expresión regular es una secuencia de caracteres que define un patrón de búsqueda.
// En este caso, /lluvia/ es un patrón de búsqueda que coincide con la cadena de texto "lluvia".

let coincidencia = frase.match(buscarPatron);

// El método match() se utiliza para buscar una coincidencia de una expresión regular dentro de una cadena de texto.

console.log(`Se encontró el patrón '${buscarPatron}' en la frase, por lo que el resultado es: ${coincidencia}`);