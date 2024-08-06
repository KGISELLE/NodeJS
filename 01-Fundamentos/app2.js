
const fs = require('fs');

//Leer el archivo
const data = fs.readFileSync('README.md', 'utf8');

//Modificar el archivo
// Asi en el archivo que estamos leyendo reemplazamos en todas las partes del documento que dice React por Angular
const newData = data.replace(/React/ig, 'Angular');

//Escribir un nuevo archivo a partir del primero que teniamos
fs.writeFileSync('README-Angular.md', newData);

//Como en este momento no tenemos ningun clg no nos muestra nada en la consola, pero si nos fijamos ha creado el nuevo archivo en nuestro Repositorio.
