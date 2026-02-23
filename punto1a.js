// Tipos de datos y typeof
// Tipos de datos primitivos

const texto = 'Hola'; // String
const numero = 1; // Number
const bolean = false; // Bolean
const nulo = null; // Null
const indefinido = undefined; // Undefined
const grande = 123n; // bigint
const simbolo = Symbol('id'); // Symbol

console.log(typeof grande); // bignint
// Funcion analizarTipo 

function analizarTipo(valor) {
    const tipo = typeof valor;
    const esNulo = valor === null;

    let descripcion = '';

    if(esNulo) {
        descripcion = 'nulo';
    } else if (tipo === 'string') {
        descripcion = 'Cadena de texto';
    } else if (tipo === 'number') {
        descripcion = 'Número';
    } else if (tipo === 'boolean') {
        descripcion = 'Valor booleano';
    } else if (tipo === 'undefined') {
        descripcion = 'Valor no definido';
    } else if (tipo === 'bigint') {
        descripcion = 'biginit';
    }

    return {
        valor: valor, 
        tipo: tipo,
        esNulo: esNulo,
        descripcion: descripcion
    };
}

console.log(analizarTipo('Hola Mundo'));
console.log(analizarTipo(null));
console.log(analizarTipo(1));
console.log(analizarTipo(false));
console.log(analizarTipo(undefined));
console.log(analizarTipo(123n));