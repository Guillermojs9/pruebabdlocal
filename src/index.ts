import { Realm } from "realm";

class Usuario extends Realm.Object {
    static schema = {
        name: 'Person',
        properties: {
            _id: 'int',
            name: 'string',
            age: 'int',
        },
        primaryKey: '_id',
    };
}

async function run() {
    const realm = await Realm.open({
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
}

run();
