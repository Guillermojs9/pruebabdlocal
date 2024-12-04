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
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const realm = yield realm_1.Realm.open({
            path: "prueba4",
            schema: [Usuario_1.Usuario],
        });
        realm.write(() => {
            //return new Usuario(realm, "30", "Luis", "luis@luis.com", 5, "123456", false, "ruta");
        });
        const usuarios = realm.objects('Usuario');
        console.log(usuarios);
        realm.close();
    });
}
run();
