const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports ={
    mode: 'development',
    entry: './src/main.js',
      
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name][contenthash].js"
    },

    devServer:{
        static: path.join(__dirname, 'dist'),
        port: 9000,
        open: true

    },

    plugins:[
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            inject: false,
            template: "./index-template.html"
        })
    ],

    module:{
        rules:[
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}