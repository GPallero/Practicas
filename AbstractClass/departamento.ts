//Clase abstracta
abstract class Department{
    //CONSTRUCTOR
    constructor(public name:string){}

    //MÉTODOS
    printName():void{
        console.log('Nombre del departamento: ', this.name);
    }

    abstract printMeeting():void; //Este método DEBE implementarse en clases derivadas
}

//Clase derivada:
class AccountingDepartment extends Department{
    //CONSTRUCTOR
    constructor(){
        super('Accounting and Auditing'); //Los constructores en las clases derivadas deben invocar super()
    }
    
    //MÉTODOS
    printMeeting(): void {
        console.log('El departamento de contabilidad se reune todos los Martes a las 10a.m.');
    }

    generateReports():void{
        console.log('Generando reporte...');
    }    
}

let department:Department; //Crear una referencia a un tipo abstracto es posible.
// department = new Departament() => No se puede crear una instancia de una clase abstracta.

department = new AccountingDepartment(); //Es posible crear y asignar una subclase no abstracta
department.printName();
department.printMeeting();
//department.generateReports(); // Error: departament no es de tipo AccountingDepartment, no es posible acceder 'generateReports'