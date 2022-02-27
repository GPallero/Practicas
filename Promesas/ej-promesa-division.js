const division=(dividendo, divisor)=>{

    return new Promise((resolve, reject) => {
        if (divisor==0 || typeof(dividendo)!='number' || typeof(divisor)!='number' ){
            reject('No se puede realizar la división, alguno de los valores ingresados es incorrecto.');
        }else{
            resolve(dividendo/divisor);
        }
    })
}

division(10,'hola').then(resultado=>{console.log(`El resultado es: ${resultado}`)}).catch(error=>{console.log(`Error: ${error}`)});

division(12,0).then(resultado=>{console.log(`El resultado es: ${resultado}`)}).catch(error=>{console.log(`${error}`)});