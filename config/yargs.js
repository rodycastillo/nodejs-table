const argv = require('yargs')
      .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 5,
        describe: 'Es la base de la tabla de multiplicar'
      })
      .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra hasta que nro multiplica'
      })
      .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
      })
      .check( (argv, options) => {
        console.log(argv.l, "argv-l")
        if( isNaN( argv.b ) ){
          throw "La base tiene que ser un número"
        }
        return true
      })
      .argv;

module.exports = {
  argv
} 