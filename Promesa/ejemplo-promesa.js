const division=(dividendo, divisor)=>{

    return new Promise((resolved, rejected) => {
        if (divisor == 0 || typeof dividendo != 'number' || typeof divisor != 'number' ){
            rejected('No se puede realizar la división, alguno de los valores ingresados es incorrecto.');
        }else{
            resolved(dividendo/divisor);
        }
    })
}

division(10,'hola').then(resultado=>{console.log(`El resultado es: ${resultado}`)}).catch(error=>{console.log(`Error: ${error}`)});

division(12,0).then(resultado=>{console.log(`El resultado es: ${resultado}`)}).catch(error=>{console.log(`${error}`)});