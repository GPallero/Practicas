abstract class Slayer{
    //PROPIEDADES
    nombre:string;
    rango:string;
    
    //CONSTRUCTOR
    constructor(nombre:string, rango:string){
        this.nombre=nombre;
        this.rango=rango;
    }   
        
    //MÉTODOS
    presentación(){
        return `Soy ${this.nombre} y mi rango es ${this.rango}`;
    }

    abstract poses(poses:string):string;
}

class Trueno extends Slayer{

    constructor(nombre:string, rango:string){
        super(nombre, rango);
    }

    poses(cantidad:string):string{
        return `Puedo utilizar ${cantidad} pose pero la he perfeccionado.`
    }
}

class Agua extends Slayer{
    constructor(nombre:string, rango:string){
        super(nombre, rango);
    }

    poses(cantidad:string):string{
        return `Puedo utilizar ${cantidad} de poses.`
    }
}

const slayers = []

slayers.push(new Trueno('Senitsu', 'Principiante'));
slayers.push(new Agua('Tanjiro', 'Principiante'));

for (const slayer of slayers){
    console.log(slayer.poses('una'));
}