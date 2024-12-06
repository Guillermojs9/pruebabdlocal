import Realm from "realm";
import { Checkpoint } from "./Checkpoint";

export class Ruta extends Realm.Object<Ruta> {
    id!: number;
    date!: Date;
    nombre!: string;
    discapacitados!: boolean;
    listaCheckpoints!: Realm.List<Checkpoint>;

    static schema = {
        name: 'Ruta',
        properties: {
            id: 'int',
            date: 'date',
            nombre: 'string',
            discapacitados: 'bool',
            listaCheckpoints: {
                type: 'list',
                objectType: 'Checkpoint',
            },
        },
        primaryKey: 'id',
    };
}
