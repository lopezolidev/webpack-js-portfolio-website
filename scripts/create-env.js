const fs = require('fs');
//instanciamos un modulo del sistema de archivos para que detecte los archivos en el proyecto

fs.writeFileSync('./.env', `API=${process.env.API}\n`);
//ahora en el servidor podrá acceder a la API en el archivo .env en la carpeta raíz, es decir que ahora ese archivo existe en el servidor