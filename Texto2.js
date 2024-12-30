let texto1 = 'texto entre comillas simples';
let texto2 = 'texto entre comillas inglesas';

let plantillas = "(plantillas literales";
let texto3 = `texto entre acentos graves ${plantillas}`;
console.log(texto3);

let objeto = new String('primitivo');
console.log(objeto);

// texto3 utiliza template literals (o plantillas literales), que son cadenas
// de texto delimitadaspor backticks (acento grave: `). Los template literals
// permiten la interpolación de expresiones mediante el uso de ${}. Dentro
// de esta interpolación, puedes insertar variables y realizar evaluaciones
// dentro de una cadena.