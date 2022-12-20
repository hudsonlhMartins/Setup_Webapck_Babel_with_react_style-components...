const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {merge} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common,{
    mode: 'development',

    devServer:{
        static: path.join(__dirname, 'dist'),
        port: 9000,
        open: true

    }
})