const fs= require('fs');


var arraysFileJS= [];
var codigoEncontrado= undefined;
let arraysArchivoJSON;
//CADIGO A BUSCAR
let codigo_a_buscar= 1036;


//LEER EL ARCHIVO
arraysArchivoJSON= fs.readFileSync('archivo.json', 'utf8');

//VER SI EL HAY CONTENIDO
if(arraysArchivoJSON.length != 0){

  arraysFileJS= JSON.parse(arraysArchivoJSON);
  codigoEncontrado= arraysFileJS.find(function(productoDato){
    return productoDato.codigo === codigo_a_buscar;

  })
}


if(codigoEncontrado){
    
    console.log('El estado anterior del producto es: ', codigoEncontrado);
    let editarArraysFileJS= arraysFileJS.map(function(productoDato){
      if(productoDato.codigo == codigo_a_buscar)
      {

        productoDato.nombre='coca-cola';
        productoDato.precio= 165;
        productoDato.stock= 0;

      }
      return productoDato;
     
    })
    let arraysFileJSON= JSON.stringify(editarArraysFileJS, null, " ");
    fs.writeFileSync('archivo.json', arraysFileJSON); 

}else{
    
    console.log("El producto con el codigo que busca no existe");
}