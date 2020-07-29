const fs= require('fs');


let funciones= {
    leerArchivo: function(){
        if(!fs.existsSync('carrito.json')){
            fs.writeFileSync('carrito.json', '');
        }
        let productosJSON=fs.readFileSync('carrito.json', 'utf8')
        let arraysProductoJS= productosJSON.length == 0 ? []: JSON.parse(productosJSON)
        return arraysProductoJS;
    },
    escribirArchivo: function(arraysProductoJS){
       let productosJSON= JSON.stringify(arraysProductoJS, null, ' ')
       fs.writeFileSync('carrito.json', productosJSON)
    },
    mostrarProductos:function(){
        let arraysProductoJS= this.leerArchivo()
        console.log(arraysProductoJS);
    },
    
    editarProducto: function(produco){
        let arraysProductoJS= this.leerArchivo()
        arraysProductoJS= arraysProductoJS.map(function(p){
            if(p.cod == produco.cod){
                p.nombre=producto.nombre;
                p.precio=producto.precio;
                p.stock= producto.stock;
                p.marca= producto.marca;
            }
            return p;
        })
        this.escribirArchivo(arraysProductoJS);

    },
    eliminarProducto:function(producto){
        let arraysProductoJS= this.leerArchivo()
        arraysProductoJS= arraysProductoJS.filter(function(p){
            return p.cod !== producto.cod;
        })
        this.escribirArchivo(arraysProductoJS);
    },
    buscarProducto: function(producto){
        let arraysProductoJS= this.leerArchivo()
        let pBuscado= arraysProductoJS.find(function(p){
            return p.cod == producto.cod;
        })
        return pBuscado;
    },
    altaProducto:function(producto){
        let arraysProductoJS= this.leerArchivo()
        let encontrado= this.buscarProducto(producto)
        if(!encontrado){
            arraysProductoJS.push(producto)
            this.escribirArchivo(arraysProductoJS) 
        }else{
            console.log('El produco con ese codigo ya existe-->ingrese otro codigo')
        }
    },
    contarProducto: function(){
        let arraysProductoJS= this.leerArchivo()
        return arraysProductoJS.reduce(function (contador, p){
            return contador + p.precio;
        }, 0);
    },
    aplicacionDescuento: function(descuento){
        let arraysProductoJS= this.leerArchivo()
        let descuentos = arraysProductoJS.map(function(p){
            return p.precio - (descuento * p.precio / 100);
        })
       
        return descuentos.reduce( (acum, precio) => acum + precio);
    },
}
module.exports=funciones;