const func=require('./funciones')


function Carrito(){

    this.agregarProductos= function(producto){
        func.altaProducto(producto)
    }
    this.quitarProducto = function(producto) {
        func.eliminarProducto(producto)
    }
    //---------------------------------------------------------------
    this.dameTotal = function (){
        let total= func.contarProducto()
        console.log(total);
    }
    
    this.aplicacionDescuento = function(descuento){
        let descuentos= func.aplicacionDescuento(descuento)
        console.log(descuentos)
    } 
    this.mostrarCarrito= function(){
        func.mostrarProductos()
    }

}
module.exports = Carrito;