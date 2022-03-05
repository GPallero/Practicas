var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//Simulamos una base de datos:
var database = [
    { id: 1, nombre: 'Carolina' },
    { id: 2, nombre: 'Amaru' },
    { id: 3, nombre: 'Rodrigo' },
    { id: 4, nombre: 'Virginia' },
];
console.log('A continuación veremos el await y el async en acción. Los resultados de las instrucciones de nuestro código no se mostraran en orden secuencial.');
//Creamos nuestra función para buscar usuarios por 'id'
var buscarId = function (id) {
    var respuesta = database.find(function (elemento) { return elemento.id === id; });
    //Creamos una promesa:
    var promesa = new Promise(function (resolve, reject) {
        setTimeout(function () {
            //Si la 'id' es encontrada retornamos la respuesta
            if (respuesta) {
                resolve(respuesta);
                //De lo contrario informamos que no se encontro dicha 'id'
            }
            else {
                reject("No se encontro el id ".concat(id, "."));
            }
        }, 2000);
    });
    //finalmente devolvemos el resultado de nuestra promesa
    return promesa;
};
//Simulamos una aplicación:
var app = function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, error_1;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                // Informamos el inicio de tareas:
                console.log('---Inicio tareas---');
                _k.label = 1;
            case 1:
                _k.trys.push([1, 6, , 7]);
                // const tareas = Promise.all([
                //     await buscarId(4), 
                //     await buscarId(1)
                // ]);
                // console.log('fullfilled? ', tareas);
                _b = (_a = console).log;
                _d = (_c = Promise).all;
                return [4 /*yield*/, buscarId(4)];
            case 2:
                _e = [
                    _k.sent()
                ];
                return [4 /*yield*/, buscarId(1)];
            case 3:
                // const tareas = Promise.all([
                //     await buscarId(4), 
                //     await buscarId(1)
                // ]);
                // console.log('fullfilled? ', tareas);
                _b.apply(_a, [_d.apply(_c, [_e.concat([
                            _k.sent()
                        ])]), 'Promise.all() finalizado | Orden de tarea: 1 |']);
                // Las promesas por separado:
                _g = (_f = console).log;
                return [4 /*yield*/, buscarId(4)];
            case 4:
                // Las promesas por separado:
                _g.apply(_f, [_k.sent(), ' Busqueda individual finalizada | Orden de tarea: 2 |']);
                _j = (_h = console).log;
                return [4 /*yield*/, buscarId(1)];
            case 5:
                _j.apply(_h, [_k.sent(), ' Busqueda individual finalizada | Orden de tarea: 3 |']);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _k.sent();
                console.log('---', error_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
app();
// console.log('--- Fin de todo.');
var sumar = function (a, b) {
    return a + b;
};
console.log('Sumar: ', sumar(3, 8), '| Orden de taera: 4 |');
// buscarId(1);
