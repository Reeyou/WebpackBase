/* eslint-disable import/no-extraneous-dependencies */
import path from 'path'
import webpack from 'webpack'

export default {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dll'),
        filename: '[name].dll.[hash:4].js',
        library: '[name]_library',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            context: __dirname,
            path: path.resolve(__dirname, 'dll', 'manifest.json')
        }),
    ],
}
