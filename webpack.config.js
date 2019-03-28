const path = require('path')

module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/env']
            }
        }]
    }
}