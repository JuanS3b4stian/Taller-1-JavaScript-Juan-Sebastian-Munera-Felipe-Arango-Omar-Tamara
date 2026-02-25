# Taller-1-JavaScript-Juan-Sebastian-Munera-Felipe-Arango-Omar-Tamara

Taller #1 de JavaScript sobre temas como Tipos de datos, variables, Manipulación de Arrays, POO, etc.

---------- Punto1A Felipe Arango Espinosa ----------

El punto1a nos permite identificar los tipos de datos primivitos en el lenguaje, creando asi una funcion llamada analizarTipo encapsulando una variable valor con su respectivo const tipo y verificar si es nulo o no.Ademas, se verifico con los valores de la primera parte y asi en los condicionales la descripcion sea el mismo resultado.

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

Para el correcto desarrollo de este punto, se usaron las prácticas, recomendaciones y temas vistos en clases de lo que se lleva del semestre y también del curso de Fundamentos de JavaScript de la plataforma Platzi, algunas de estas
fueron:

- El uso de las comillas invertidas (template literals) para crear Strings más limpios y fáciles de entender, siendo
  una mejor alternativa que la concanetación clásica.
- Inicialización y método .length de arrays, para la generación de las notas que serían previamente analizadas respecto a las solicitudes del enunciado.
- Construcción de objetos (clave-valor), para crear cada objeto que cuenta como calificación.

---------- Punto2B Juan Sebastián Múnera Bedoya ----------

- Para realizar la función de primosMenoresA(limite) se solicitaba almacenar todos los números primos que hubieran
  dentro del limite y que posteriormente se agregaran al array.
  Para cumplir con esto, se consultó sobre métodos de array para agregar un valor, el cual es array.push(valor)

Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Problemas y soluciones durante el desarrollo:

- Al terminar de crear la función tablaDeMultiplicar(n, limite), cuando empecé a realizar pruebas sobre su correcto
  funcionamiento se evidenció algo: al momento de llamar la función a través de un console.log(tablaDeMultiplicar(5,10)), al final de su ejecución, a pesar de que la funcionalidad de mostrar la tabla del número acorde al límite solicitado era correcta y bien ejecutada, a lo último la función retornaba undefined.
  Al buscar en la documentación de MDN Web Docs encontré que, en el apartado de Sentencias/return, dice que, si al
  finalizar la función se omite el return, automáticamente se retorna un undefined.
  Como no era necesario el return en esta función, la forma correcta de llamar a la función es sin imprimirla con
  un console.log(), así ya no retorna undefined.

Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

---------- Punto3A Omar Yesith Tamara Pallares ----------
El ejercicio se resolvió creando un arreglo llamado productos y llenandolo con objetos que cuetan con las siguientes propiedaes nombre (string), precio (number), categoria (string: 'computadores', 'celulares', 'accesorios'), stock (number) y disponible (boolean).
Para calcular lo solicitado se utilizó un ciclo for, ya que no se permitía usar métodos avanzados de arrays.
El total de productos se obtuvo usando la propiedad .length, La suma de los precios se obtubo sumando los valores de los precios de cada producto en cada iteracion, y la cantidad de productos disponibles se obtuvo utilizando un if que verificaba si la propiedad disponible era verdadera y si lo era incrementaba el contador.

Fuente: https://www.freecodecamp.org/news/the-javascript-array-handbook/

---------- Punto3B Juan Sebastián Múnera Bedoya && Felipe Arango Espinosa ----------

---------- Felipe Arango Espinosa ----------

Los metodos filter() y map() nos sirve para manipular un arreglo de productos sin modificar el original. El metodo filter() se usa para crear un nuevo arreglo que contiene unicamente los productos cuyo precio sea mayor o igual a 700 y que pertenezcan a la categoria 'celulares'. Por otro lado, el metodo map() se utiliza para transformar los elementos del arreglo, generando nuevos que cumplan con las condiciones requeridas.

Fuente: https://www.freecodecamp.org/espanol/news/tutorial-de-arrayfilter-de-javascript-como-iterar-a-traves-de-los-elementos-en-un-arreglo/

Fuente: https://www.freecodecamp.org/espanol/news/javascript-map-como-utilizar-la-funcion-js-map-metodo-de-arreglo/

---------- Juan Sebastián Múnera ----------

- Método sort() --> Hubieron algunas complicaciones para sortear el array de menor a mayor.
  Los retornos de -1 o 1 en las condiciones impuestas, son porque JavaScript toma como señal estos números, cuando
  entiende que es negativo va antes, cuando es positivo, va después.

El resto de los métodos fueron más sencillos de implementar correctamente, así que no ellos no hay observaciones.

Información para los métodos nativos y su sintaxis:
Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
(Desplegable Instance Methods)

Información de .table() para organizar datos:
Fuente: https://developer.mozilla.org/en-US/docs/Web/API/console/table_static

---------- Punto 4 Felipe Arango Espinosa && Omar Yesith Tamara Pallares ----------

---------- Felipe Arango Espinosa ----------
En la 4 punto, parte A. Se utiliza programacion orientada a objetos (POO), nos permite modelar informacion mediante clases y objetos. En este caso tenemos la clase Estudiante, que representa a un estudiante y sus caracteristicas y los comportamientos son los metodos.

Fuente: https://www.freecodecamp.org/espanol/news/programacion-orientada-a-objectos-en-javascript-explicado-con-ejemplos/

---------- Omar Yesith Tamara ----------
El ejercicio se resolvio creando un metodo constructor llamado Curso donde se definieron las propiedades nombre codigo creditos y un arreglo inscritos para guardar los estudiantes. Los metodos se agregaron con prototype uno para inscribir estudiantes usando .push() otro para obtener el listado recorriendo el arreglo con un for y concatenando nombre y apellido otro para calcular el promedio sumando las notas y dividiendolas entre la cantidad de inscritos usando .length y otro para obtener el estudiante con la nota mas alta comparando dentro de un ciclo. Luego se hizo un ejemplo creando el curso con new inscribiendo estudiantes y mostrando resultados con console.log() Tambien se usaron Object.keys() Object.values() y Object.entries() para mostrar claves valores y pares clave valor de un objeto y finalmente se demostro la diferencia entre copiar por referencia donde ambas variables apuntan al mismo objeto y copiar por valor usando Object.assign() y el operador spread ... donde se crea una copia independiente que no afecta al original.

Fuentes: https://www.freecodecamp.org/news/clone-an-object-in-javascript
https://www.freecodecamp.org/news/javascript-assigning-values-vs-assigning-references
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object./entries
