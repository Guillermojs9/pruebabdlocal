import Realm from "realm";

export class Checkpoint extends Realm.Object<Checkpoint> {
    id!: number;
    latitud!: string;
    longitud!: string;
    esTesoro!: boolean;

    static schema = {
        name: 'Checkpoint',
        properties: {
            id: 'int',
            latitud: 'string',
            longitud: 'string',
            esTesoro: 'bool',
        },
        primaryKey: 'id',
    };
}
