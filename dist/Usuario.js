"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const realm_1 = require("realm");
class Usuario extends realm_1.Realm.Object {
    constructor(realm, id, username, email, rutas, hash, esDiscapacitado, avatar) {
        super(realm, { id, username, email, rutas, hash, esDiscapacitado, avatar });
    }
}
exports.Usuario = Usuario;
Usuario.schema = {
    name: 'Usuario',
    properties: {
        id: 'string',
        username: 'string',
        email: 'string',
        rutas: 'int',
        hash: 'string',
        esDiscapacitado: 'bool',
        avatar: 'string',
    },
    primaryKey: 'id',
};
