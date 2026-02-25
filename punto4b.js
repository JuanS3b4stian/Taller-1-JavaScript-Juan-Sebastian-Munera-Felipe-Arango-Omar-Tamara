//Metodo constructor
class Curso {
    constructor(nombre, codigo, creditos) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.creditos = creditos;
        this.inscritos = [];
    }

    //Metodo para inscribir estudiantes
    inscribirEstudiante(estudiante) {
        this.inscritos.push(estudiante);
    }

    //Metodo para obtener listado
    obtenerListado() {
        let listado = [];
        for(let i = 0; i < this.inscritos.length; i++) {
            let estudiante = this.inscritos[i];// Se accede a cada estudiante en el array de inscritos mediante el iterador i
            listado.push(estudiante.nombre + " " + estudiante.apellido);// Se agrega el nombre completo del estudiante al array de listado
        }
        return listado;// Se retorna el array de listado con los nombres completos de los estudiantes inscritos
    }

    // Metodo para calcular promedio del curso
    calcularPromedioCurso() {
        let suma = 0;
        for(let i = 0; i < this.inscritos.length; i++) {
            suma += this.inscritos[i].nota;// Se accede a la propiedad nota de cada estudiante en el array de inscritos y se suma a la variable suma
        }
        return suma / this.inscritos.length;// Se retorna el promedio dividiendo la suma total de las notas entre la cantidad de estudiantes inscritos
    }

    // Metodo para obtener al estudiante con la nota mas alta
    estudianteDestacado() {
        let destacado = this.inscritos[0];
        for(let i = 1; i < this.inscritos.length; i++) {
            if(this.inscritos[i].nota > destacado.nota) {// Se compara la nota de cada estudiante con la nota del estudiante destacado actual
                destacado = this.inscritos[i];// Si la nota es mayor, se actualiza el estudiante destacado con el nuevo estudiante
            }
        }
        return destacado;
    }
}

// Ejemplo
let estudiante1 = { nombre: "Juan", apellido: "Perez", nota: 4.5 };
let estudiante2 = { nombre: "Ana", apellido: "Gomez", nota: 3.8 };

let curso = new Curso("Desarrollo Web", "001", 3);

curso.inscribirEstudiante(estudiante1);
curso.inscribirEstudiante(estudiante2);

console.log(curso.obtenerListado());
console.log(curso.calcularPromedioCurso());
console.log(curso.estudianteDestacado());

//Object.keys(), Object.values() y Object.entries()
let estudiante = {
    nombre: "Maria",
    edad: 22,
    nota: 4.3
}

// Object.keys()
let claves = Object.keys(estudiante);
console.log(claves);

// Object.values()
let valores = Object.values(estudiante);
console.log(valores);

// Object.entries()
let entradas = Object.entries(estudiante);
console.log(entradas);

//Diferencia entre copiar por referencia y por valor

// Copia por referencia
let original = { nombre: "Felipe", nota: 3 };
let copia = original;
copia.nota = 4;
console.log(original.nota);// Imprime 4 porque copia y original apuntan al mismo objeto

// Copia por valor
let original2 = { nombre: "Omar", nota: 4.1 };
let copia2 = Object.assign({}, original2);
copia2.nota = 3.5;
console.log(original2.nota);// Imprime 4.1 porque copia2 es una copia diferente del objeto

// Copia con spread(...)
let original3 = { nombre: "Sofia", nota: 4.8 };
let copia3 = {...original3};
copia3.nota = 2;
console.log(original3.nota);// Imprime 4.8 porque copia3 es una copia diferente del objeto