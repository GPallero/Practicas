// Pedimos el módulo:
const http = require('http');
//En mi constante 'http' quedaron todas las funcionalidades del módulo 'http' (Módulo nativo de Node.js)

//Creamos un server que recibe como parametros un requerimiento y una respuesta.
const server = http.createServer((request, response) =>{
    //Definimos una ruta y respondemos.
    if(request.url === '/'){
        response.write('Primer server con HTTP')
        response.write('Esta forma de hacer servidores es vieja y en la actualidad no se utiliza.')
        response.end()
    }
})
//Elegimos el puerto
server.listen(8080)
console.log('Corriendo en el puerto 8080')