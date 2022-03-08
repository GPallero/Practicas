
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
