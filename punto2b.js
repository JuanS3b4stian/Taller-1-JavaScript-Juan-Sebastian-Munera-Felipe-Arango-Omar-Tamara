// Función tablaDeMultiplicar(n, limite) que toma como parámetros n (un número) y limite (otro número).
function tablaDeMultiplicar(n, limite) {
  // Inicialización del contador en 0.
  let contador = 0;

  console.log(`Tabla de Multiplicar del Número ${n}: \n`);
  /* Ciclo while, donde su condición exige que, se seguirá ejecutando el ciclo
   a menos que el contador sobrepase el limite establecido. */
  while (contador <= limite) {
    // Se imprime la multiplicación con su valor.
    console.log(`${n} * ${contador} = ${n * contador}`);
    // En cada vuelta del ciclo, el contador se suma.
    contador++;
  }
}

// Función esPrimo(n) que recibe parámetro de n (un número)
function esPrimo(n) {
  // Evaluamos directamente en caso de que se ingresen números negativos o que sea igual a 1, retornando false
  if (n <= 1) {
    return false;
  }

  // Ciclo for tradicional, pero esta vez empezando a iterar desde 2, ya que 0 y 1 fueron evaluados previamente.
  for (let i = 2; i < n; i++) {
    /* Operación de módulo para evaluar si el residuo de la división entre n e i es 0, 
    indicando que tiene más de dos divisores y por ende, no es primo, retornando false. */
    if (n % i === 0) {
      return false;
    }
  }

  // De caso contrario a nuestras condiciones, se retorna true, indicando que el número es primo.
  return true;
}

// Función primosMenoresA que recibe un parámetro de limite (un número).
function primosMenoresA(limite) {
  // Inicialización del array que contendrá todos los números primos.
  let primosMenores = [];

  // Ciclo for tradicional para iterar sobre el limite.
  for (let i = 0; i < limite; i++) {
    // Validación con if donde su condición es la función esPrimo(), elaborada previamente.
    if (esPrimo(i)) {
      // Si la evaluación de la función esPrimo() es true, se agrega al array con su método .push() el número.
      primosMenores.push(i);
    }
  }

  return primosMenores;
}

// Llamar y testear método tablaDeMultiplicar()
tablaDeMultiplicar(9, 10);
console.log("--------------------");

// Llamar y testear método esPrimo()
console.log(esPrimo(2));
console.log(esPrimo(71));
console.log(esPrimo(83));
console.log(esPrimo(29));

console.log(esPrimo(0));
console.log(esPrimo(1));
console.log(esPrimo(9));
console.log(esPrimo(77));
console.log("--------------------");

// Llamar y testear método primosMenoresA()
console.log(primosMenoresA(20));
console.log(primosMenoresA(1));
console.log(primosMenoresA(100));
