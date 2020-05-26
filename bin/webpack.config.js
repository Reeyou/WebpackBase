const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // init index.html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // clear dist/
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 抽离css

const os = require('os') //获取电脑的处理器有几个核心，作为配置传入
const chalk = require('chalk')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    mode: "production",
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html',
            inject: true,
            minify: {
                collapseWhitespace: true,
            }
        }),
        new webpack.NamedModulesPlugin(), // 查看修补的依赖
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new HappyPack({ //开启多线程打包
            id: 'happy-babel-js',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        }),
        new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
        // new FriendlyErrorsPlugin({
        //     compilationSuccessInfo: {
        //       messages: [`Your application is running here: http://localhost:${port}`],
        //     }
        //   })
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
                    enforce: true
                },
                styles: {
                    name: 'styles',
                    test: /(\.less|\.css)$/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                }),
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ],
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ],
                include: path.resolve(__dirname, "src"),
            }
        ]
    }
};