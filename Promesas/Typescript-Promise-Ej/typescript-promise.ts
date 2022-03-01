const database = [
    {id: 1, nombre:'Carolina'},
    {id: 2, nombre:'Amaru'},
    {id: 3, nombre:'Rodrigo'},
    {id: 4, nombre:'Virginia'},
]

const buscarId = (id:number): Promise<any> => {
    const respuesta = database.find(elemento => elemento.id === id)
    
    const promesa = new Promise (function(resolve, reject){
        setTimeout(()=>{
            if(respuesta){
                resolve(respuesta)
            }else{
                reject(`No se encontro el id ${id}.`)
            }
        }, 2000);
    })

    return promesa;
}

const app = async() => {
    
    console.log('---Inicio tareas---');
    try{

        const tareas = Promise.all([
            await buscarId(4), 
            await buscarId(1)
        ]);
        
        // console.log(Promise.all([await buscarId(4), await buscarId(1)]));
        console.log(tareas);
        console.log('--- Promise All Finalizado');
        // const persona = await buscarId(2);
        
        console.log(await buscarId(4));
        console.log(await buscarId(1));

    }catch (error) {
        console.log('---', error);
    }
    
    console.log('--- Fin tareas');
}

app();

console.log('--- Fin de todo.');

const sumar = (a:number, b:number) =>{
    return a + b;
}

console.log('Suma', sumar(3,8));
// buscarId(1);