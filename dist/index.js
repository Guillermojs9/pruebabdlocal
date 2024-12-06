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
const Usuario_1 = require("./Usuario");
const Checkpoint_1 = require("./Checkpoint");
const Ruta_1 = require("./Ruta");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const realm = yield realm_1.Realm.open({
            path: "prueba5",
            schema: [Usuario_1.Usuario, Checkpoint_1.Checkpoint, Ruta_1.Ruta],
        });
        realm.write(() => {
            const usuario = realm.objectForPrimaryKey("Usuario", '2');
            if (usuario)
                realm.delete(usuario);
        });
        const usuarios = realm.objects("Usuario");
        console.log(usuarios);
        realm.close();
    });
}
run();
