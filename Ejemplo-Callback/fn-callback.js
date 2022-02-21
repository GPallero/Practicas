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
function Operacion(N1, N2, callback){
    return (callback(N1, N2));
}

function Suma(operando1, operando2){
    return operando1 + operando2;
}

function Producto(operando1, operando2){
    return operando1 * operando2;
}

//Aquí podemos ver más claramente el objetivo de una función callback:
console.log(Operacion(7, 10, Suma))
console.log(Operacion(7, 10, Producto))