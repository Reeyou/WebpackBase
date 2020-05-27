/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // clear dist/
// const ExtractTextPlugin = require('extract-text-webpack-plugin') // 抽离css，不再内嵌于js bundle
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin') // 优化压缩css资源
// const ScriptExtHtmlPlugin = require('script-ext-html-webpack-plugin') // html-webpack-plugin扩展插件
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 构架bundle 分析
const baseConfig = require('./webpack.config.js')

const config = require('../config/webpack')


const webpackProdConfig = merge(baseConfig, {
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        // new ExtractTextPlugin({
        //     filename: utils.assetsPath('css/[name].[hash:8].css'),
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
            },
        }),
    ],
})

// npm run build --report
if (config.build.bundleAnalyzerReport) {
    webpackProdConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackProdConfig
