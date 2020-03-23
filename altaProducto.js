const producto= require('./Producto');
const fs = require('fs');

var arraysFileJS= [];
var codigoEncontrado= undefined;
//DATOS MODIFICABLES PARA PRUEBA 
let producto_1= new producto('crush', 1036, 125, 2500);


let arraysArchivoJSON= fs.readFileSync('archivo.json', 'utf8');


if(arraysArchivoJSON.length != 0){

  arraysFileJS= JSON.parse(arraysArchivoJSON);
  codigoEncontrado= arraysFileJS.find(function(productoDato){
    return productoDato.codigo === producto_1.codigo;

  })
}

//DAR DE ALTA DEPENDIENDO  DEPENDIENDO DEL VALOR DE arraysArchivoJS
if(!codigoEncontrado){

  arraysFileJS.push(producto_1);
  let arraysFileJSON= JSON.stringify(arraysFileJS, null, " ");
  fs.writeFileSync('archivo.json', arraysFileJSON); 

}else{

  console.log('El codigo del producto ya existe');

}