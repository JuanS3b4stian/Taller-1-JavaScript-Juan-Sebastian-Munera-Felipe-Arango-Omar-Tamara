// Tomamos el mismo Array del la parte A para poder usar los métodos nativos
const productos = [
  {
    nombre: "Asus zenbook",
    precio: 1000,
    categoria: "computadores",
    stock: 2,
    disponible: true,
  },
  {
    nombre: "Iphone 12",
    precio: 700,
    categoria: "celulares",
    stock: 5,
    disponible: true,
  },
  {
    nombre: "Cargador tipo c",
    precio: 200,
    categoria: "accesorios",
    stock: 10,
    disponible: true,
  },
  {
    nombre: "Acer Nitro",
    precio: 1100,
    categoria: "computadores",
    stock: 4,
    disponible: true,
  },
  {
    nombre: "Audifonos",
    precio: 500,
    categoria: "accesorios",
    stock: 8,
    disponible: true,
  },
  {
    nombre: "Mouse",
    precio: 400,
    categoria: "accesorios",
    stock: 13,
    disponible: true,
  },
  {
    nombre: "Samsung s25",
    precio: 1100,
    categoria: "celulares",
    stock: 0,
    disponible: true,
  },
  {
    nombre: "Teclado RGB",
    precio: 600,
    categoria: "accesorios",
    stock: 0,
    disponible: true,
  },
  {
    nombre: "Macbook",
    precio: 1700,
    categoria: "computadores",
    stock: 4,
    disponible: true,
  },
];

// Obtener los productos con precio mayor a $500.000 y los productos de la categoría 'celulares'.
console.log("Método filter()");
// filter() crea una copia superficial de una porción del array con base a la condición que se le pase.
const resultado = productos.filter(
  (productos) => productos.precio >= 700 && productos.categoria == "celulares",
);
// Se muestra el resultado con .table() para fines estéticos.
console.table(resultado);
console.log("----------------------------------------");

// Generación de un nuevo array con nombre y precio de cada producto.
console.log("Método map() para nombre y precio de cada producto");
// map() crea un nuevo array el cual se llena con los datos que cumplan la condición impuesta
const resultado2 = productos.map((productos) => {
  return {
    nombre: productos.nombre,
    precio: productos.precio,
  };
});
console.table(resultado2);
console.log("----------------------------------------");

// Generación de un nuevo array aplicando descuento del 15% a todos los precios
console.log("Método map() para descuento");
const resultado3 = productos.map((productos) => {
  return {
    nombre: productos.nombre,
    precio: productos.precio * 0.15,
  };
});
console.table(resultado3);
console.log("----------------------------------------");

// Calcular el precio total del inventario (suma de precio * stock de cada producto).
console.log("Método reduce()");
// reduce() recorre el array dado y acumula el valor solicitado.
const totalInventario = productos.reduce((acumulador, producto) => {
  // Se usó la variable acumulador por práctica de la documentación
  return acumulador + producto.precio * producto.stock;
}, 0);
console.log(totalInventario);
console.log("----------------------------------------");

// Encuentrar el primer producto que no tenga stock (stock === 0).
console.log("Método find()");
// find() retorna el primer elemento del array que satisface la condición que se le ponga.
const primerProductoSinStock = productos.find(
  (producto) => producto.stock === 0,
);
console.log(primerProductoSinStock);
console.log("----------------------------------------");

// Verificar si ALGÚN producto cuesta más de $2.000.000.
console.log("Método some()");
// some() retorna un valor boolean (true/false) si algún dato dentro del array cumple la condición.
const costoMayorQueDosM = (producto) => producto.precio > 2000000;
console.log(productos.some(costoMayorQueDosM)); // Si ALGÚN producto cuesta más de $2.000.000

// Verificar si TODOS los productos están disponibles.
console.log("Método every()");
// every() retorna un valor boolean (true/false) si todos loss datos dentro del array cumple la condición.
const todosDisponibles = (producto) => producto.disponible === true;
console.log(productos.every(todosDisponibles)); // Si TODOS los productos están disponibles
console.log("----------------------------------------");

// Ordenar los productos de menor a mayor precio y muestrar el resultado.
console.log("Método sort()");
// sort() ordena los elementos de un array ascendentemente por defecto.
const menorAMayor = productos.sort((producto1, producto2) => {
  // Si el producto que se evalua es menor que el otro, retorna -1 (lo pone antes)
  if (producto1.precio < producto2.precio) {
    return -1;
  }
  // Si el producto que se evalua es mayor que el otro, retorna 1 (lo pone después)
  if (producto1.precio > producto2.precio) {
    return 1;
  }
});
console.table(menorAMayor);
console.log("----------------------------------------");
