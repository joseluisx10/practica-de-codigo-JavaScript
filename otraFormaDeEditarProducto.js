const fs= require('fs');


var arraysFileJS= [];
var codigoEncontrado= null;
let arraysArchivoJSON;
//CODIGO A BUSCAR
let codigo_a_buscar= 1021;


//LEER EL ARCHIVO
arraysArchivoJSON= fs.readFileSync('archivo.json', 'utf8');


if(arraysArchivoJSON.length != 0){

  arraysFileJS= JSON.parse(arraysArchivoJSON);
  var editarArraysFileJS= arraysFileJS.map(function(productoDato){
    if(productoDato.codigo == codigo_a_buscar)
    {
        //?
        codigoEncontrado=productoDato;
        productoDato.nombre='pepsi';
        productoDato.precio= 165;
        productoDato.stock= 0;

    }
    return productoDato;
   
  })
}


if(codigoEncontrado){
    //no me devuelve el estado anterior?
    console.log('El estado anterior del producto es: ', codigoEncontrado);
    let arraysFileJSON= JSON.stringify(editarArraysFileJS, null, " ");
    fs.writeFileSync('archivo.json', arraysFileJSON); 

}else{
    
    console.log("El producto con el codigo que busca no existe");
}