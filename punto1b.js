// Coerción en JavaScript

const a = "5" + 3 // el resultado de esta operación es "53" porque el + al usar un numero y un string, el numero se convierte en un string y luego el + concatena ambos Strings.
console.log(a)
const b = "5" - 3 // el resultado de esta operación es 2 porque el con - no se puede concatenar, entonces la coercion de js convierte el string en numero y luego lo resta con el numero.
console.log(b)
const c = "5" * "2" // el resultado de esta operación es 10 porque el con * no se puede concatenar, entonces la coercion de js convierte ambos en numero y los multiplica.
console.log(c)
const d = true + 1 // el resultado de esta operación es 2 porque el true booleano es convertido en 1 por la coercion de js y luego se suma con el numero.
console.log(d)
const e = false + "JS" // el resultado de esta operación es falseJS porque el false booleano es convertido en string por la coercion de js y luego el + concatena ambos Strings.
console.log(e)
const f = null + 1 // el resultado de esta operación es 1 porque el null es convertido en 0 por la coercion de js y luego se suma con el numero.
console.log(f)

// función convertirDatos()

function convertirDatos(valor) {
    return {
        numero: Number(valor),
        string: String(valor),
        booleano: Boolean(valor)
    };
}

console.log(convertirDatos("5"));
console.log(convertirDatos(0));
console.log(convertirDatos(true));
// La función convertirDatos() toma un valor y devuelve un objeto con tres propiedades: numero, string y booleano. Cada atributo del objeto tiene el resultado de convertir el valor ingresado a un tipo de dato diferente forzando la coerción de js usando las funciones Number(), String() y Boolean().

// Función compararValores()

function compararValores(valor1, valor2) {
    return {
        igualdadFlexible: valor1 == valor2,
        igualdadEstricta: valor1 === valor2
    };
}

console.log(compararValores("5", 5));
console.log(compararValores(0, false));
console.log(compararValores(null, undefined));