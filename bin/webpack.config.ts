/* eslint-disable import/no-extraneous-dependencies */

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' // init index.html

import os from 'os' // 获取电脑的处理器有几个核心，作为配置传入
// @ts-ignore
import HappyPack from 'happypack'

const threads = os.cpus().length

export default {
    entry: {
        app: './src/main.tsx',
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
        new webpack.NamedModulesPlugin(), // 查看修补的依赖
        new webpack.HashedModuleIdsPlugin(),
        new HappyPack({ // 开启多线程打包
            id: 'happy-babel-js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threads,
        }),
    ],
    // 通用模块代码分离
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
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
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
                use: [
                    'file-loader',
                ],
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
                use: [
                    'file-loader',
                ],
            },
        ],
    },
}
