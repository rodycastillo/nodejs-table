const fs = require('fs');
const colors = require('colors')

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
  
    try {
        console.log("Try")
        console.log(hasta, "hasta")
        console.log(base, "base")
        console.log(listar, "listar")
      let salida= '';
      let consola ='';
    
      for( let i =1; i<=hasta; i++){
        salida+=`${base} x ${i} = ${base*i}\n`
        consola+=`${base} x ${i} = ${base*i}\n`
      }

      if(listar) {

        console.log("=====================".green);
        console.log('     Tabla del:',colors.blue(base ));
        console.log("=====================".green);

        console.log(consola)
      }

      fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) =>{
        if (err) throw err ;
      })
        
      return `./salida/tabla-${base}.txt`;
    

    } catch (err) {
      throw err;
    }
  
}

module.exports = {
 crearArchivo
}