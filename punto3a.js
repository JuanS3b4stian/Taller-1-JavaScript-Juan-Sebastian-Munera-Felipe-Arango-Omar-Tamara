// Array productos
const productos = [
    {nombre: 'Asus zenbook', precio: 1000, categoria: 'computadores', stock: 2, disponible: true},
    {nombre: 'Iphone 12', precio: 700, categoria: 'celulares', stock: 5, disponible: true},
    {nombre: 'Cargador tipo c', precio: 200, categoria: 'accesorios', stock: 10, disponible: true},
    {nombre: 'Acer Nitro', precio: 1100, categoria: 'computadores', stock: 4, disponible: false},
    {nombre: 'Audifonos', precio: 500, categoria: 'accesorios', stock: 8, disponible: true},
    {nombre: 'Mouse', precio: 400, categoria: 'accesorios', stock: 13, disponible: true},
    {nombre: 'Samsung s25', precio: 1100, categoria: 'celulares', stock: 3, disponible: false},
    {nombre: 'Teclado RGB', precio: 600, categoria: 'accesorios', stock: 6, disponible: true},
    {nombre: 'Macbook', precio: 1700, categoria: 'computadores', stock: 4, disponible: true}
]

let productosDisponibles = 0;
let totalProductos = productos.length;// el .length obtiene cuantos elementos hay en el array
let totalPrecio = 0;

// Ciclo for para recorrer el array de productos e ir calculando el total de productos, la suma de todos los precios y la cantidad de productos disponibles
for (let i = 0; i < productos.length; i++) {
    totalPrecio += productos[i].precio;// Suma el precio de cada producto para obtener totalPrecio
    if(productos[i].disponible === true){// Verifica si el producto esta disponible e incrementa productosDisponibles en caso de estarlo
        productosDisponibles++
    }
}


console.log(`El total de productos es: ${totalProductos}`)
console.log(`La suma de todos los precios es: ${totalPrecio}`)
console.log(`La cantidad de productos disponibles es: ${productosDisponibles}`)
