
//Importamos express:
const express = require('express');

//Guardamos 'express' en una constante:
const server = express();
const PORT = 8080;

//Haciendo la primera ruta:
server.get('/', (request, response) =>{
    response.send('Server con Express - Página de inicio !')
})

//Otra ruta:
server.get('/Otra-ruta', (request, response)=>{
    response.send('Server con Express - Otra ruta')
})

//Dejamos el servidor 'escuchando' en el puerto almacenado en PORT
server.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

//Comandos de la terminal utilizados:
// npm init -y
// npm install express
// En la terminal de gitbash:
// Creamos el archivo de texto .gitignore: 
// touch .gitignore
// Agregamos al final del archivo .gitignore la carpeta 'node_modules' y todas sus subcarpetas.
// echo "node_modules/" >> .gitignore
// La siguiente linea remueve la carpeta 'node_modules' del control de git si esta fue agregada con anterioridad.
// git rm -r --cached node_modules'
// Así la carpeta 'node_modules' es ignorada al realizar el push a github.