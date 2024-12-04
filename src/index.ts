import { Realm } from "realm";
import { Usuario } from "./Usuario";
async function run() {
    const realm = await Realm.open({
        path: "prueba4",
        schema: [Usuario],
    });

    realm.write(() => {
        //return new Usuario(realm, "30", "Luis", "luis@luis.com", 5, "123456", false, "ruta");
    });

    const usuarios = realm.objects('Usuario');
    console.log(usuarios);

    realm.close();
}

run();

