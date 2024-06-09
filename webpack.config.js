const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const  webpack  = require('webpack');
const { title } = require('process');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
            "buffer": require.resolve("buffer/"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url/"),
            "path": require.resolve("path-browserify"),
            "vm": require.resolve("vm-browserify"),
            "fs": false,
            "tty": require.resolve("tty-browserify"),
            "http": require.resolve("stream-http"),
            "os": require.resolve("os-browserify/browser"),
            "process": require.resolve("process/browser"),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "hash-map",
            filename: "index.html",
            template: "src/index.html",
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
};