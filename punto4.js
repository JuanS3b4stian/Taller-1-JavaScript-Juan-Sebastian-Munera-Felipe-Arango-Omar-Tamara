// Objetos en JavaScript 
/*
    Parte A:
    Definicion
    Definir el objeto estudiantes con las propiedades:
    nombre, apellido, codigo, programa, semestres, 
    notas (array de objetos con materia y calificacion) y activo?

    Manipulacion
    Agregar los siguientes metodos:
    calcularPromedio() -> calcula y return promedio notas
    obtenerNombreCompleto() -> return nombre y apellido concatenados
    estaAprobado() -> return true si promedio es mayor o igual a 3.0
    agregarNota(materia, calificacion) -> agrega una nueva nota al array notas
    toString() -> return una representacion legible, todos los datos

    Cada metodo con console.log();

    1. Defina un objeto estudiante con las propiedades: 
    nombre, apellido, codigo, programa, semestre, notas (array de objetos materia y calificacion) y activo

*/

class Estudiante {
    constructor(nombre, apellido, codigo, programa, semestre, notas, activo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.codigo = codigo;
        this.programa = programa;
        this.semestre = semestre;
        this.notas = notas;
        this.activo = activo;
    }

    agregarNota(materia, calificacion){
        this.notas.push({
            materia: materia, 
            calificacion: calificacion
        });
        console.log('Nota registrada');
    }

    calcularPromedio(){
        if (this.notas.length === 0) {
            console.log('No hay notas registradas');
            return 0;
        }

        let suma = 0;
        for(let i = 0; i < this.notas.length; i++){
            suma += this.notas[i].calificacion;
        }
        return suma / this.notas.length; 
    }

    estaAprobado(){
        return this.calcularPromedio() >= 3.0;
    }

    obtenerNombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }

}

let e1 = new Estudiante(
    'Omar',
    'Tamara',
    123,
    'Ingenieria',
    5,
    [], // Iniciar el array vacio
    true 
);

e1.agregarNota('Fisica', 4.5);
e1.agregarNota('Pruebas de Software', 2.8);
e1.agregarNota('Bases de datos', 3.9);

// Mostrar nombre completo
console.log('Estudiante:', e1.obtenerNombreCompleto());

// Calcular promedio
let promedio = e1.calcularPromedio();
console.log('Promedio:', promedio);

// Verificar si aprueba
if (e1.estaAprobado()) {
    console.log('El estudiante APRUEBA');
} else {
    console.log('El estudiante NO aprueba');
}