/* eslint-disable import/no-extraneous-dependencies */

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import os from 'os' 
// @ts-ignore
import HappyPack from 'happypack'

const threads = os.cpus().length

const envDevelopment = process.env.NODE_ENV === 'development'
export default {
    entry: {
        app: './src/App.tsx',
    },
    output: {
        filename: envDevelopment ? 'js/[name].js' : "js/[name].[hash].js",
        path: path.resolve('..', __dirname, 'dist'),
        publicPath: '/',
        chunkFilename: 'js/[chunkhash:4].chunk.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html',
            inject: true,
            minify: {
                collapseWhitespace: true,
            },
        }),
        new HappyPack({
            id: 'happy-babel-js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threads,
        }),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, 'dll'),
            manifest: path.resolve(__dirname, 'dll', 'manifest.json')
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                common: {
                    name: 'common',
                    test: /node_modules/,
                    chunks: 'initial',
                    priority: -10,
                    enforce: true,
                },
                styles: {
                    name: 'styles',
                    test: /(\.scss|\.css)$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    outputPath: "fonts"
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                        }
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader:'file-loader',
                options: {
                    limit: 10000,
                    outputPath: "images"
                },
            },
        ],
    },
}
