var webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    context: __dirname + "/app",
    entry: {
        app: "./app.module.js",
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/js',
        filename: PROD ? 'app.min.js' : 'app.js'        
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */ { name: "vendor", /* filename= */filename: "vendor.bundle.js" }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })

    ]
}