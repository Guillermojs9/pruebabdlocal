"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const realm_1 = require("realm");
class Usuario extends realm_1.Realm.Object {
}
Usuario.schema = {
    name: 'Usuario',
    properties: {
        _id: 'string',
        nombre: 'string',
        correo: 'string',
        rutas: 'Ruta[]',
        hash: 'string',
        esDiscapacitado: 'bool',
        age: 'int'
    },
    primaryKey: '_id',
};
class Ruta extends realm_1.Realm.Object {
}
Ruta.schema = {
    name: 'Ruta',
    properties: {
        _id: 'string',
        nombre: 'string',
        checkpoints: 'Checkpoint[]',
        dia: 'date',
        compatibleDiscapacitados: 'bool',
    },
    primaryKey: '_id',
};
class Checkpoint extends realm_1.Realm.Object {
}
Checkpoint.schema = {
    name: 'Checkpoint',
    properties: {
        _numero: 'int',
        latitud: 'string',
        longitud: 'string',
        esTesoro: 'bool',
    },
    primaryKey: '_numero',
};
class Reseña extends realm_1.Realm.Object {
}
Reseña.schema = {
    name: 'Reseña',
    properties: {
        _id: 'int',
        usuario: 'Usuario',
        valoracion: 'int',
        imagen: 'string',
        texto: 'string',
    },
    primaryKey: '_id',
};
class Reserva extends realm_1.Realm.Object {
}
Reserva.schema = {
    name: 'Reserva',
    properties: {
        _id: 'string',
        fecha: 'date',
        usuario: 'Usuario',
        numPersonas: 'int',
    },
    primaryKey: '_id',
};
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const realm = yield realm_1.Realm.open({
            path: "prueba",
            schema: [Usuario, Checkpoint, Reseña, Reserva, Ruta],
        });
        realm.write(() => {
            const usuario1 = realm.create('Usuario', { _id: '1', nombre: 'Carlos Mendoza', correo: 'carlos.mendoza@email.com', age: 25, esDiscapacitado: false, hash: 'abc123', rutas: [] });
            const usuario2 = realm.create('Usuario', { _id: '2', nombre: 'Ana López', correo: 'ana.lopez@email.com', age: 30, esDiscapacitado: true, hash: 'def456', rutas: [] });
            const usuario3 = realm.create('Usuario', { _id: '3', nombre: 'Pedro Sánchez', correo: 'pedro.sanchez@email.com', age: 40, esDiscapacitado: false, hash: 'ghi789', rutas: [] });
        });
        const usuarios = realm.objects('Usuario');
        console.log(usuarios);
        realm.close();
    });
}
run();
