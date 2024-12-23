"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const realm_1 = __importDefault(require("realm"));
class Usuario extends realm_1.default.Object {
}
exports.Usuario = Usuario;
Usuario.schema = {
    name: 'Usuario',
    properties: {
        id: 'string',
        username: 'string',
        email: 'string',
        rutas: {
            type: 'list',
            objectType: 'Ruta',
        },
        hash: 'string',
        esDiscapacitado: 'bool',
        avatar: 'string',
    },
    primaryKey: 'id',
};
