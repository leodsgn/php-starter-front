const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "./assets/scripts/index.js")
    },

    build: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        publicPath: path.resolve(__dirname, "./dist")
    },

    module: {
        rules: [
            {
                test: /\.js$/, 
                loaders: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    },

    devtool: "souce-map",

    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".styl"]
    },

    plugins: [
        
    ]
}