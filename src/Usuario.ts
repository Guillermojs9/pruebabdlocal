import Realm from "realm";
import { Ruta } from "./Ruta";

export class Usuario extends Realm.Object<Usuario> {
    id!: string;
    username!: string;
    email!: string;
    rutas!: Realm.List<Ruta>;
    hash!: string;
    esDiscapacitado!: boolean;
    avatar!: string;

    static schema = {
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
}
