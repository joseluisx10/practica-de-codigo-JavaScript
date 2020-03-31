const Carrito= require('./carrito')
const Producto= require('./product')
const Marca= require('./marca')

let marca= new Marca('Bimbo', 'a')
let pan= new Producto('pan','a',254,5,marca)
let carrito1= new Carrito()
let biscochito= new Producto('biscochitos','b',236,5,marca)
let carrito2= new Carrito()

carrito1.agregarProductos(pan)
//------------------------------------------------------------
//no puedo agregar el mismo producto a distintos carritos
//carrito2.agregarProductos(cocacola)
//-----------------------------------------------------
carrito2.agregarProductos(biscochito)

carrito1.mostrarCarrito()
carrito2.dameTotal()
carrito2.aplicacionDescuento(20)
//carrito1.quitarProducto(pepsi)
