/**
 * Created by Administrator on 2017/7/10 0010.
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports =[
    {//app
        name:"widget1",
    entry: {
        widget1: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: "bundle-[name]-[hash:5].js",
        filename: "bundle-[name].js",
        // publicPath: '/pc/dist/',
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
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, "../../../../../dll/vendor-manifest.json")
        }),
        new CommonsChunkPlugin({
            // The order of this array matters
            names: ["common"],
            minChunks: 2
        }),
        new ExtractTextPlugin({
            // filename: 'bundle-[name]-[hash:5].css', disable: false, allChunks: true
            filename: 'bundle-[name].css', disable: false, allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
    ],
}]