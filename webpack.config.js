var webpack = require("webpack")

var PROD = process.env.NODE_ENV || false

module.exports = {
    context: __dirname + "/app",
    entry: {
        app: "./app.module.js"
    },
    output: {
        path: __dirname + "/js",
        filename: PROD ? "app.min.js" : "app.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })

    ]
}