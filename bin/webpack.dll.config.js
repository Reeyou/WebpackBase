/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        vendor: ['lodash'],
    },
    output: {
        path: path.resolve(__dirname, 'dll'),
        filename: '[name].dll.[hash:4].js',
        library: '[name]_library',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.resolve(__dirname, 'dll', 'manifest.json'),
            context: __dirname,
        }),
    ],
}
