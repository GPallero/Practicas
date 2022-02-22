const division=(dividendo, divisor)=>{

    return new Promise((resolved, rejected) => {
        if (divisor == 0){
            rejected('no se puede dividir por 0');
        }else{
            resolved(dividendo/divisor);
        }
    })
}

division(10,3).then(resultado=>{console.log(`El resultado es: ${resultado}`)}).catch(error=>{console.log(`Error: ${error}`)});
division(13,0).then(resultado=>{console.log(`El resultado es: ${resultado}`)}).catch(error=>{console.log(`Error: ${error}`)});