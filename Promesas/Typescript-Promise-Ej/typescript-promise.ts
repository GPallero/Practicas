//Simulamos una base de datos:
const database = [
    {id: 1, nombre:'Carolina'},
    {id: 2, nombre:'Amaru'},
    {id: 3, nombre:'Rodrigo'},
    {id: 4, nombre:'Virginia'},
]

console.log('A continuación veremos el await y el async en acción. Los resultados de las instrucciones de nuestro código no se mostraran en orden secuencial.')
//Creamos nuestra función para buscar usuarios por 'id'
const buscarId = (id:number): Promise<any> => {
    const respuesta = database.find(elemento => elemento.id === id)
    //Creamos una promesa:
    const promesa = new Promise (function(resolve, reject){
        setTimeout(()=>{
            //Si la 'id' es encontrada retornamos la respuesta
            if(respuesta){
                resolve(respuesta)
            //De lo contrario informamos que no se encontro dicha 'id'
            }else{
                reject(`No se encontro el id ${id}.`)
            }
        }, 2000);
    })
    //finalmente devolvemos el resultado de nuestra promesa
    return promesa;
}

//Simulamos una aplicación:
const app = async() => {
    
    // Informamos el inicio de tareas:
    console.log('---Inicio tareas---');
    try{

        // const tareas = Promise.all([
        //     await buscarId(4), 
        //     await buscarId(1)
        // ]);
        // console.log('fullfilled? ', tareas);
        
        console.log(Promise.all([
            await buscarId(4), 
            await buscarId(1)]), 'Promise.all() finalizado | Orden de tarea: 1 |'
        );
               
        // Las promesas por separado:
        console.log(await buscarId(4), ' Busqueda individual finalizada | Orden de tarea: 2 |');
        console.log(await buscarId(1), ' Busqueda individual finalizada | Orden de tarea: 3 |');

    }catch (error) {
        console.log('---', error);
    }
    
    // console.log('--- Fin tareas');
}

app();

// console.log('--- Fin de todo.');

const sumar = (a:number, b:number) =>{
    return a + b;
}

console.log('Sumar: ', sumar(3,8), '| Orden de taera: 4 |');
// buscarId(1);