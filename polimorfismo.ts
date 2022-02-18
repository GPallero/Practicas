abstract class Guerrero{
    //PROPIEDADES
    clase: string;
    raza: string;
    
    //CONSTRUCTOR
    constructor(clase:string, raza:string){
        this.clase = clase;
        this.raza = raza;
    }

    //METODOS
    //NORMAL
    describirse(){
        return `Soy ${this.clase} ${this.raza}`
    }
    
    //ABSTRACTO
    abstract habilidad(nombre:string):string
}

class Arquero extends Guerrero{

    constructor(clase:string, raza:string){
        super(clase, raza);
    }

    habilidad(nombre: string): string {
        return `Soy ${nombre} y mi habilidad es tirar flechas.`
    }
}

class Mago extends Guerrero{
    
    constructor(clase:string, raza:string){
        super(clase, raza)
    }
    
    habilidad(nombre: string): string {
        return `Soy ${nombre} y mi habilidad es hacer magia.`
    }
    
}

const guerreros = [];

guerreros.push(new Arquero('Arquero', 'Elfo'));
guerreros.push(new Mago('Mago', 'Humano'));

for(const guerrero of guerreros){
    console.info(guerrero.habilidad('Odersh'));
}

// Para transpilar este archivo, instale el compilador TypeScript 'npm install -g typescript'
// Luego Transpile el archivo TS a JS con el comando 'tsc polimorfismo.ts'

// Antes de lo mencionado tuve que verificar las politicas de ejecución (about_Execution_Policies)
// Utilice 'Set-ExecutionPolicy -Scope CurrentUser' 'Bypass'