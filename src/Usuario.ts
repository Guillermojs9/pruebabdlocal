import { Realm } from "realm";

export class Usuario extends Realm.Object<Usuario> {
    id!: string;
    username!: string;
    email!: string;
    rutas!: number;
    hash!: string;
    esDiscapacitado!: boolean;
    avatar!: string;

    static schema = {
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

    constructor(realm: Realm, id: string, username: string, email: string, rutas: number, hash: string, esDiscapacitado: boolean, avatar: string) {
        super(realm, { id, username, email, rutas, hash, esDiscapacitado, avatar });
    }

}