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


    //Consultar un solo usuario por clave primaria
    const usuario = realm.objectForPrimaryKey("Person", 7);

    //Consultar todos los objetos "Person" de la base de datos
    const usuarios1 = realm.objects('Person');
    console.log(usuarios1);

    //Las operaciones hacia la base de datos deben hacerse dentro de una transacción de escritura
    realm.write(() => {
    //Insertar un registro en la base de datos
        realm.create('Person', { _id: 21, name: 'John Doe 21', age: 30 });

    //Eliminar un registro de la base de datos
        //Primero hacemos una consulta para sacar al usuario
        const usuario1 = realm.objectForPrimaryKey("Person", 10);
        realm.delete(usuario1);

    //Eliminar varios registros de la base de datos
        //Hacemos la consulta para sacar todos los usuarios que se acorden a la consulta
        const usuariosBorrar = realm.objects("Person").filtered("_id >= 12");
        realm.delete(usuariosBorrar);

    //Actualizar resgistros de la base de datos
        
            const usuario2 = realm.objectForPrimaryKey("Person", 11);
            if(usuario2)
                usuario2.name = "Grace Purple Mod"
            

    //Actualizar varios registros de la base de datos
        const usuariosModificar = realm.objects("Person").filtered("_id >= 6");
        usuariosModificar.forEach((usuario: any) => {
            usuario.name = "Nuevo Nombre";
            usuario.age = 55;
        });


    });
    const usuarios = realm.objects('Person');
    console.log(usuarios);

    realm.close();
}

run();



