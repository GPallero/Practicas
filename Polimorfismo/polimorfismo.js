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
var Guerrero = /** @class */ (function () {
    //CONSTRUCTOR
    function Guerrero(clase, raza) {
        this.clase = clase;
        this.raza = raza;
    }
    //METODOS
    //NORMAL
    Guerrero.prototype.describirse = function () {
        return "Soy ".concat(this.clase, " ").concat(this.raza);
    };
    return Guerrero;
}());
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(clase, raza) {
        return _super.call(this, clase, raza) || this;
    }
    Arquero.prototype.habilidad = function (nombre) {
        return "Soy ".concat(nombre, " y mi habilidad es tirar flechas.");
    };
    return Arquero;
}(Guerrero));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(clase, raza) {
        return _super.call(this, clase, raza) || this;
    }
    Mago.prototype.habilidad = function (nombre) {
        return "Soy ".concat(nombre, " y mi habilidad es hacer magia.");
    };
    return Mago;
}(Guerrero));
var guerreros = [];
guerreros.push(new Arquero('Arquero', 'Elfo'));
guerreros.push(new Mago('Mago', 'Humano'));
for (var _i = 0, guerreros_1 = guerreros; _i < guerreros_1.length; _i++) {
    var guerrero = guerreros_1[_i];
    console.info(guerrero.habilidad('Odersh'));
}