let texto1 = "Me encanta la música de Charly Garcia.";
let texto2 = "Me encanta la música de Led Zeppelin.";
let texto3 = "Me encanta la música de Calle 13.";
let texto4 = "La música de Meshuggah.";
let texto5 = "Música de Daft Punk..";
let texto6 = "Me gusta Diplo.";
let texto7 = "No me gusta Diplo.";

// Lo que hace es dar instrucciones de como encontrar cierto tipo de texto dentro de otro texto.
// Si queremos que no le importen las mayusculas y las minusculas podemos poner una "i" al final.
// Ahora si ponemos este simbolo llamado Karet: "^". Lo que vamos hacer es buscar esta palabra al inicio del texto.

let regex = /^Me/i;

// $ Este va a buscar la palabra al final del texto1.

// let regex = /Zeppelin.$/i;

console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));
console.log(regex.test(texto5));
console.log(regex.test(texto6));
console.log(regex.test(texto7));