//Función clásica con una función callback como párametro:
function Mensaje(callback){
    console.log('A continuación se invocara la función callback.');
    callback();
}

//Función utilizada como callback:
function Saludo(){
    console.log('Te envio saludos desde una función callback.');
}

Mensaje(Saludo);

//Otro ejemplo de función callback:
function Sumar(N1, N2, callback){
    let suma = N1 + N2;
    return (callback(suma));
}

function Resultado(suma){
    console.log(suma)
}

Sumar(7, 10, Resultado)