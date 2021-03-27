const { crearArchivo } = require('./helpers/multiplicar')
require('colors')
const { argv } = require('./config/yargs')



console.clear()

 console.log(argv)
 console.log(argv.l)
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ ,base=5] =arg3.split('=')
// console.log(base)

// base = 3;

crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => console.log(nombreArchivo, 'creado'.rainbow) ) 
  .catch( err => console.log(err) ) 