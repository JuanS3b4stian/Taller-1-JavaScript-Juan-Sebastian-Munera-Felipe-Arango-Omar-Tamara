// Función princiapl clasificarNota que recibe como parámetro una nota.
function clasificarNota(nota) {
  /* Declaración de las variables para los valores de letra, estado y mensaje.
     Se usó 'let' para declarar las variables porque sus valores cambian.
  */
  let valorLetra;
  let valorEstado;
  let valorMensaje;

  // Controlador Switch para asignar la letra acorde al rango solicitado.
  switch (true) {
    case nota >= 4.5 && nota <= 5.0:
      valorLetra = "A";
      break;
    case nota >= 4.0 && nota <= 4.4:
      valorLetra = "B";
      break;
    case nota >= 3.5 && nota <= 3.9:
      valorLetra = "C";
      break;
    case nota >= 3.0 && nota <= 3.4:
      valorLetra = "D";
      break;
    default:
      valorLetra = "F";
  }

  // Condicionales if/else para asignar el estado acorde a la calificación
  if (nota >= 3.0) {
    valorEstado = "Aprobado";
  } else {
    valorEstado = "Reprobado";
  }

  // Condicionales if/else if/else para asignar el mensaje motivacional acorde a la calificación
  if (valorLetra === "A") {
    valorMensaje = "Excelente trabajo, lo hiciste muy bien.";
  } else if (valorLetra === "B") {
    valorMensaje = "Lo hiciste bien.";
  } else if (valorLetra === "C") {
    valorMensaje = "Cumpliste, pero ponle más empeño.";
  } else if (valorLetra === "D") {
    valorMensaje = "Casi repruebas, esfuerzate más.";
  } else {
    valorMensaje = "Debes mejorar mucho.";
  }

  // Al terminar de asignar los respectivos valores a los atributos del objeto, se construye y se retorna.
  return {
    letra: valorLetra,
    estado: valorEstado,
    mensaje: valorMensaje,
    puntos: nota,
  };
}

// Se inicializa el array de notas con 8 valores en un rango de 0 - 5
let notas = [5.0, 2.9, 3.0, 4.4, 4.2, 3.5, 1.2, 2.0];

/* Declaración de las variables para el punto 10.
   Nuevamente, se usó 'let' ya que son variables que van a cambiar su valor.
*/
let suma = 0;
let aprobados = 0;
let reprobados = 0;
let notaAlta = 0;
let notaBaja = notas[0];

// Ciclo for clásico, declarando su iterador, su condición y finalmente, el incremento del iterador
for (let i = 0; i < notas.length; i++) {
  // Se aplica el método clasificarNota a cada índice (valor) del array de notas.
  let resultado = clasificarNota(notas[i]);

  // Para fines estéticos, se optó por formatear de esta manera sencilla para visualizar cada objeto.
  console.log(`Letra: ${resultado.letra}`);
  console.log(`Estado: ${resultado.estado}`);
  console.log(`Mensaje: ${resultado.mensaje}`);
  console.log(`Puntos: ${resultado.puntos}`);
  console.log("--------------------");

  // En cada vuelta del ciclo for, se le suma cada valor del array para después promediar.
  suma += notas[i];

  // Evaluación de condiciones para determinar la cantidad de aprobados y reprobados.
  if (notas[i] >= 3.0) {
    aprobados++;
  } else {
    reprobados++;
  }

  // Evaluación con sentencia if para ir actualizando el valor de la nota más alta y más baja.
  if (notas[i] > notaAlta) {
    notaAlta = notas[i];
  }

  if (notas[i] < notaBaja) {
    notaBaja = notas[i];
  }
}

// Declarar y otorgar valor final al promedio del grupo acorde al array de notas.
let promedio = suma / notas.length;

// Se imprime toda la información solicitada para el punto 10
console.log(`Promedio del grupo: ${promedio}`);
console.log(`Cantidad de aprobados: ${aprobados}`);
console.log(`Cantidad de reprobados: ${reprobados}`);
console.log(`Nota más alta del curso: ${notaAlta}`);
console.log(`Nota más baja del curso: ${notaBaja}`);
