/**
 * Created by Administrator on 2017/7/10 0010.
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        widget1: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle-[name]-[hash:5].js",
        chunkFilename: "bundle-[name]-[hash:5].js"
    },
    module: {
        loaders: [
            { test: /\.js/, exclude: /node_modules/, loader: "babel-loader?cacheDirectory=true" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
            { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' }) },
            { test: /\.(png|gif)$/, loader: 'file-loader' }]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, "../../../../../dll/vendor-manifest.json")
        }),
        new ExtractTextPlugin({
            filename: 'bundle-[name]-[hash:5].css', disable: false, allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.ejs'
        })
    ],
    devServer: {
        port: 8080,
        disableHostCheck: true
    }
}