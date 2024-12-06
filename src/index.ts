import { Realm } from "realm";
import { Usuario } from "./Usuario";
import { Checkpoint } from "./Checkpoint";
import { Ruta } from "./Ruta";
async function run() {
    const realm = await Realm.open({
        path: "prueba5",
        schema: [Usuario, Checkpoint, Ruta],
    } as Realm.Configuration);


    realm.write(() => {

        const usuario = realm.objectForPrimaryKey("Usuario", '2');
        if (usuario)
            realm.delete(usuario)
    });

    const usuarios = realm.objects("Usuario");
    console.log(usuarios);

    realm.close();
}

run();

