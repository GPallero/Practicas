var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clase abstracta
var Department = /** @class */ (function () {
    //CONSTRUCTOR
    function Department(name) {
        this.name = name;
    }
    //MÉTODOS
    Department.prototype.printName = function () {
        console.log('Nombre del departamento: ', this.name);
    };
    return Department;
}());
//Clase derivada:
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    //CONSTRUCTOR
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    //MÉTODOS
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('El departamento de contabilidad se reune todos los Martes a las 10a.m.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generando reporte...');
    };
    return AccountingDepartment;
}(Department));
var department; //Crear una referencia a un tipo abstracto es posible.
// department = new Departament() => No se puede crear una instancia de una clase abstracta.
department = new AccountingDepartment(); //Es posible crear y asignar una subclase no abstracta
department.printName();
department.printMeeting();
//department.generateReports(); // Error: departament no es de tipo AccountingDepartment, no es posible acceder 'generateReports'
