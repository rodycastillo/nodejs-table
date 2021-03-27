const { crearArchivo } = require('./helpers/multiplicar')
require('colors')
const { argv } = require('./config/yargs')



console.clear()

 console.log(argv)
 console.log(argv.l)

crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => console.log(nombreArchivo, 'creado'.rainbow) ) 
  .catch( err => console.log(err) ) 