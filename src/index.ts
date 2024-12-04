import { Realm } from "realm";

class Usuario extends Realm.Object {
    static schema = {
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
}

class Ruta extends Realm.Object {
    static schema = {
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
}

class Checkpoint extends Realm.Object {
    static schema = {
        name: 'Checkpoint',
        properties: {
            _numero: 'int',
            latitud: 'string',
            longitud: 'string',
            esTesoro: 'bool',
        },
        primaryKey: '_numero',
    };
}

class Reseña extends Realm.Object {
    static schema = {
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
}

class Reserva extends Realm.Object {
    static schema = {
        name: 'Reserva',
        properties: {
            _id: 'string',
            fecha: 'date',
            usuario: 'Usuario',
            numPersonas: 'int',
        },
        primaryKey: '_id',
    };
}


async function run() {
    const realm = await Realm.open({
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
}

run();

