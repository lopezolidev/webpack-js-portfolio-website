const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin'); //instancias

module.exports = {
    entry: './src/index.js',
      // Entry nos permite decir el punto de entrada de nuestra aplicación
    output: {
        // Output nos permite decir hacia dónde va enviar lo que va a preparar webpack
        path: path.resolve(__dirname, 'dist'),
        // path es donde estará la carpeta donde se guardará los archivos
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        filename: 'main.js',
        // filename le pone el nombre al archivo final
        assetModuleFilename: 'assets/images/[hash][ext][query]'
        // Esta instrucción hace que webpack le agregue un hash (un hash es una serie de caracteres aleatorios) y su extencion por medio de esas variables en el string
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
            },
            {
                test: /\.css|.styl$/i,
                //test va saber cuales archivos reconocer para empaquetar
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "stylus-loader"
                ]
                //señalamos el loader, aquí para css y stylus
            },
            {
                test: /\.png/,
                //señalamos el tipo de archivo
                type: "asset/resource"
                //donde los vamos a dejar
            },
            {
                test: /\.(woff|woff2)$/,
                //reconocer estos formatos
                use: {
                    loader: 'url-loader',
                    //el loader que empleará
                    options: {
                        limit: 10000,
                        // O LE PASAMOS UN BOOLEANOS TRUE O FALSE , o un numero
                        // Habilita o deshabilita la transformación de archivos en base64.
                        mimetype: "application/font-woff",
                        // Especifica el tipo MIME con el que se alineará el archivo. 
                        // Los MIME Types (Multipurpose Internet Mail Extensions)
                        // son la manera standard de mandar contenido a través de la red.
                        name: "[name].[ext]",
                        // EL NOMBRE INICIAL DEL ARCHIVO + SU EXTENSIÓN
                        // PUEDES AGREGARLE [name]hola.[ext] y el output del archivo seria 
                        // ubuntu-regularhola.woff
                        outputPath: "./assets/fonts/",
                        // EL DIRECTORIO DE SALIDA (SIN COMPLICACIONES)
                        publicPath: "./assets/fonts/",
                        // EL DIRECTORIO PUBLICO (SIN COMPLICACIONES)
                        esModule: false, 
        	            // AVISAR EXPLICITAMENTE SI ES UN MODULO
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //config del plugin
            inject: true, 
            //inyectar el bundler al html
            template: "./public/index.html",
            //cuál es el archivo que va a empaquetar
            filename: "./index.html"
            //el nombre del archivo resultante
        }),
        new MiniCssExtractPlugin(),
        //aquí en plugins extendemos las funcionalidades de tareas específicas, los configuramos pasándoles opciones
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"), //origin of the file
                    to: "assets/images" //asuming dist directory
                }
            ]
        })
    ]
}