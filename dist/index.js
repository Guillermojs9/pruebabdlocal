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
    name: 'Person',
    properties: {
        _id: 'int',
        name: 'string',
        age: 'int',
    },
    primaryKey: '_id',
};
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const realm = yield realm_1.Realm.open({
            path: "prueba",
            schema: [Usuario],
        });
        //Consultar un solo usuario por clave primaria
        //const usuario = realm.objectForPrimaryKey("Person", 7);
        //Consultar todos los objetos "Person" de la base de datos
        //const usuarios = realm.objects('Person');
        //console.log(usuarios);
        //Las operaciones hacia la base de datos deben hacerse dentro de una transacción de escritura
        realm.write(() => {
            //Insertar un registro en la base de datos
            //realm.create('Person', { _id: 1, name: 'John Doe', age: 30 });
            //Eliminar un registro de la base de datos
            //Primero hacemos una consulta para sacar al usuario
            //const usuario = realm.objectForPrimaryKey("Person", 10);
            //realm.delete(usuario);
            //Eliminar varios registros de la base de datos
            //Hacemos la consulta para sacar todos los usuarios que se acorden a la consulta
            //const usuariosBorrar = realm.objects("Person").filtered("_id >= 12");
            //realm.delete(usuariosBorrar);
            //Actualizar resgistros de la base de datos
            /*
                const usuario = realm.objectForPrimaryKey("Person", 11);
                if(usuario)
                    usuario.name = "Grace Purple Mod"
                */
            //Actualizar varios registros de la base de datos
            const usuariosModificar = realm.objects("Person").filtered("_id >= 6");
            // Usamos 'any' en la iteración para evitar el error de tipo
            usuariosModificar.forEach((usuario) => {
                usuario.name = "Nuevo Nombre";
                usuario.age = 55;
            });
        });
        const usuarios = realm.objects('Person');
        console.log(usuarios);
        realm.close();
    });
}
run();
