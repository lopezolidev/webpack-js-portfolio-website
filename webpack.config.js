const path = require('path');

module.exports = {
    entry: './src/index.js',
      // Entry nos permite decir el punto de entrada de nuestra aplicación
    output: {
        // Output nos permite decir hacia dónde va enviar lo que va a preparar webpack
        path: path.resolve(__dirname, 'dist'),
        // path es donde estará la carpeta donde se guardará los archivos
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        filename: 'main.js'
        // filename le pone el nombre al archivo final
    },
    resolve: {
        extensions: ['.js'],
        // Aqui van las extensiones que tendremos en nuestro proyecto para webpack las lea
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}