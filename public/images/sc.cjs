const fs = require("fs");
const path = require("path");

const carpeta = "./"; // Ruta raíz

function recorrer(dir) {
    for (const item of fs.readdirSync(dir)) {
        const ruta = path.join(dir, item);

        if (fs.statSync(ruta).isDirectory()) {
            recorrer(ruta);
        } else if (path.extname(item).toLowerCase() === ".jpeg") {
            const nuevo = path.join(
                dir,
                path.basename(item, ".jpeg") + ".jpg"
            );

            fs.renameSync(ruta, nuevo);
            console.log(`${ruta} -> ${nuevo}`);
        }
    }
}

recorrer(carpeta);
console.log("Proceso completado.");