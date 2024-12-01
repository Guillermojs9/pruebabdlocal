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
        /*
            realm.write(() => {
                realm.create('Person', { _id: 3, name: 'John Doe', age: 30 });
                realm.create('Person', { _id: 4, name: 'Jane Smith', age: 25 });
            });
        */
        const usuarios = realm.objects('Person');
        console.log(usuarios);
        realm.close();
    });
}
run();
