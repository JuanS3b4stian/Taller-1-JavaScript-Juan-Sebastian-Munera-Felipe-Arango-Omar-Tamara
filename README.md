# Taller-1-JavaScript-Juan-Sebastian-Munera-Felipe-Arango-Omar-Tamara

Taller #1 de JavaScript sobre temas como Tipos de datos, variables, Manipulación de Arrays, POO, etc.

El punto1a nos permite identificar los tipos de datos primivitos en el lenguaje, creando asi una funcion llamada analizarTipo encapsulando una variable valor con su respectivo const tipo y verificar si es nulo o no.
Ademas, se verifico con los valores de la primera parte y asi en los condicionales la descripcion sea el mismo resultado.

El punto1b fue solucionado a partir del estudio de la
coerción de tipo que aplica JavaScript de forma implícita ya que es un lenguaje dinamicamente tipado y como funcionan los operadores de igualdad flexible e igualdad estricta.
La coerción implicita de JavaScript convierte los tipos de datos automáticamente dependiendo de que operador se este utilizando.
Cuando el operdor es + y hay un string en la operación JavaScript convierte el otro valor en string y concatena ambos.
En cambio cuando el operador es -,\*,/ y uno de los operadores es string JavaScript convierte ambos a número para hacer la operación matemática.
El operador de igualdad flexible ==, compara valores luego de aplicarles coerción implicita es decir convierte los tipos de dato si es necesario y luego compara solo el valor.
El operador de igualdad estricta ===, compara valores
sin aplicar coerción es decir que compara el valor y su
tipo de dato.

Fuente: https://www.freecodecamp.org/news/coercion-and-type-conversion-in-javascript/
---------- Punto2A Juan Sebastián Múnera Bedoya ----------
Para el correcto desarrollo de este punto, se usaron las prácticas, recomendaciones y temas vistos en clases de lo que se lleva del semestre y también del curso de Fundamentos de JavaScript de la plataforma Platzi.

---------- Punto3A Omar Yesith Tamara Pallares ----------
El ejercicio se resolvió creando un arreglo llamado productos y llenandolo con objetos que cuetan con las siguientes propiedaes nombre (string), precio (number), categoria (string: 'computadores', 'celulares', 'accesorios'), stock (number) y disponible (boolean).
Para calcular lo solicitado se utilizó un ciclo for, ya que no se permitía usar métodos avanzados de arrays.
El total de productos se obtuvo usando la propiedad .length, La suma de los precios se obtubo sumando los valores de los precios de cada producto en cada iteracion, y la cantidad de productos disponibles se obtuvo utilizando un if que verificaba si la propiedad disponible era verdadera y si lo era incrementaba el contador.

Fuente: https://www.freecodecamp.org/news/the-javascript-array-handbook/
