// let objeto  = { 'uno': 1, 'dos': 2 };
// Recomendaciónm para que sea facil de leer

let objeto = {
    numero: 1,
    texto: 'texto',
    lista: [],
    boolean: true,
    objeto: {
        objeto2: 'Hola'
    }
};
// Podemos tener Objetos dentro de objetos:
console.log(objeto.objeto.objeto2);

// console.log(objeto);
// console.log(objeto.numero);
// console.log(objeto.texto);

// Eliminamos el objeto:

// delete objeto['objeto'];
// console.log(objeto);

// Cuando empiezas a trabajar en proyectos vas a darte cuanta que esto se utiliza muchisimo,
// esto porque permite representar muchas cosas de la vida real. Y en código utilizamos la
// programacíon orientada a objetos.

let usuario = {
    nombre: 'Xavier',
    apellidos: 'Reyes Ochoa',
    alias: 'Programador X',
};

// Algo que se tiene que considerar cuando se trabaja en objetos es algo llamado "mutaciones",
// los objetos se comportant de una manera diferente a otros tipos de javascript como numeros, textos,
// booleanos, en una forma en que los objetos guardan el mismo espacio en la memoria, por ejemplo si creo una variable:

let numero1 = 1;
let numero2 = numero1;
numero2 = 3;
console.log(numero1, numero2);

// La diferencia de los objetos es de que los objetos ocupan un lugar en la memoria y si tu modificas
// sus propiedades estas modificando al mimso objeto 

// let usuario2 = usuario;
// usuario2.alias = 'Programador Z';
// console.log(usuario);

// Y esto es en lo que hay que tener mucho cuidado en JavaScript porque los numeros,
// el texto y los booleanos no van a tener este problema pero los objetos ocupan el mismo lugar en la memoria.

let usuario2 = JSON.parse(JSON.stringify(usuario));
usuario2.alias = 'Programador Z';
console.log(usuario);
console.log(usuario2);

// Puedes utilizar esta libreria llamada JSON lo que hace es transforma este objeto a un texto
// y despues trasformamos el texto de vuelta a un objeto y de esta manera no estamos utilizando
// el mismo objeto que existia en la memtoria sino que estamos creando un objeto desde cero.