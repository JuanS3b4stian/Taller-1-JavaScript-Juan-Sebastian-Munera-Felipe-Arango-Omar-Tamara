// Parte B: Array funcionales
const productos = [
    {nombre: 'Asus zenbook', precio: 1000, categoria: 'computadores', stock: 2, disponible: true},
    {nombre: 'Iphone 12', precio: 700, categoria: 'celulares', stock: 5, disponible: true},
    {nombre: 'Cargador tipo c', precio: 200, categoria: 'accesorios', stock: 10, disponible: true},
    {nombre: 'Acer Nitro', precio: 1100, categoria: 'computadores', stock: 4, disponible: true},
    {nombre: 'Audifonos', precio: 500, categoria: 'accesorios', stock: 8, disponible: true},
    {nombre: 'Mouse', precio: 400, categoria: 'accesorios', stock: 13, disponible: true},
    {nombre: 'Samsung s25', precio: 1100, categoria: 'celulares', stock: 3, disponible: false},
    {nombre: 'Teclado RGB', precio: 600, categoria: 'accesorios', stock: 6, disponible: true},
    {nombre: 'Macbook', precio: 1700, categoria: 'computadores', stock: 4, disponible: true}
]

// metodos nativos (map, filter, reduce, find, some, every, sort)
// Filter
const resultado = productos.filter(productos => productos.precio >= 700 && productos.categoria == 'celulares');
console.table(resultado);

// Map Nombre y precio de cada producto
const resultado2 = productos.map(productos => {
    return {
        nombre: productos.nombre,
        precio: productos.precio*0.15
    }
})
console.table(resultado2);