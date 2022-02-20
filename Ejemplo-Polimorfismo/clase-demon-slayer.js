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
var Slayer = /** @class */ (function () {
    //CONSTRUCTOR
    function Slayer(nombre, rango) {
        this.nombre = nombre;
        this.rango = rango;
    }
    //MÉTODOS
    Slayer.prototype.presentación = function () {
        return "Soy ".concat(this.nombre, " y mi rango es ").concat(this.rango);
    };
    return Slayer;
}());
var Trueno = /** @class */ (function (_super) {
    __extends(Trueno, _super);
    function Trueno(nombre, rango) {
        return _super.call(this, nombre, rango) || this;
    }
    Trueno.prototype.poses = function (cantidad) {
        return "Puedo utilizar ".concat(cantidad, " pose pero la he perfeccionado.");
    };
    return Trueno;
}(Slayer));
var Agua = /** @class */ (function (_super) {
    __extends(Agua, _super);
    function Agua(nombre, rango) {
        return _super.call(this, nombre, rango) || this;
    }
    Agua.prototype.poses = function (cantidad) {
        return "Puedo utilizar ".concat(cantidad, " de poses.");
    };
    return Agua;
}(Slayer));
var slayers = [];
slayers.push(new Trueno('Senitsu', 'Principiante'));
slayers.push(new Agua('Tanjiro', 'Principiante'));
for (var _i = 0, slayers_1 = slayers; _i < slayers_1.length; _i++) {
    var slayer = slayers_1[_i];
    console.log(slayer.poses('una'));
}
