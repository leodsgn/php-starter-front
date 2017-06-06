const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "./assets/scripts/index.js"),

    output: {
        path: path.resolve(__dirname, "/dist/scripts"),
        filename: 'index.js',
        publicPath: path.resolve(__dirname, "/dist")
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

    devtool: "source-map",

    resolve: {
        modules: ["node_modules"]
        // extensions: [".js", ".styl"]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}