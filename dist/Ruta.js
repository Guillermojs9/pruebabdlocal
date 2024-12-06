"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = void 0;
const realm_1 = __importDefault(require("realm"));
class Ruta extends realm_1.default.Object {
}
exports.Ruta = Ruta;
Ruta.schema = {
    name: 'Ruta',
    properties: {
        id: 'int',
        date: 'date',
        nombre: 'string',
        discapacitados: 'bool',
        listaCheckpoints: {
            type: 'list',
            objectType: 'Checkpoint',
        },
    },
    primaryKey: 'id',
};
