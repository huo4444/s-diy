/**
 * Created by Administrator on 2017/7/10 0010.
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: ['react', 'react-dom', 'react-router','react-router-dom','scriptjs','whatwg-fetch']
    },
    output: {
        path: path.resolve(__dirname, '../s-diy-crtl/public/pc/dist'),
        // filename: "bundle-[name]-[hash:5].js",
        filename: "bundle-[name].js",
        publicPath: '/pc/dist/',
        chunkFilename: "bundle-[name]-[hash:5].js"
    },
    module: {
        loaders: [
            { test: /\.js/, exclude: /node_modules/, loader: "babel-loader?cacheDirectory=true" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
            { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' }) },
            { test: /\.(png|gif)$/, loader: 'file-loader' }
            ]
    },
    plugins: [
        new ExtractTextPlugin({
            // filename: 'bundle-[name]-[hash:5].css', disable: false, allChunks: true
            filename: 'bundle-[name].css', disable: false, allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
    ],
}