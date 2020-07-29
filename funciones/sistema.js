//sistema para agregar productos a un carrito
const Carrito= require('./carrito')
const Producto= require('./product')
const Marca= require('./marca')

let marca= new Marca('Bimbo', 'a')
let pan= new Producto('pan','a',254,5,marca)
let carrito= new Carrito()
let galletitas= new Producto('galletitas','b',236,5,marca)



carrito.agregarProductos(pan)
carrito.quitarProducto(galletitas)
carrito.agregarProductos(galletitas)

carrito.mostrarCarrito()


