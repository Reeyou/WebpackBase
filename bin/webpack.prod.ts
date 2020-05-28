/* eslint-disable import/no-extraneous-dependencies */

import webpack from 'webpack'
import merge from 'webpack-merge'

import { CleanWebpackPlugin } from 'clean-webpack-plugin' // clear dist/
// import ExtractTextPlugin from 'extract-text-webpack-plugin' // 抽离css，不再内嵌于js bundle
// @ts-ignore
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin' // 优化压缩css资源
// @ts-ignore
// import ScriptExtHtmlPlugin from 'script-ext-html-webpack-plugin' // html-webpack-plugin扩展插件
// @ts-ignore
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer' // 构建bundle 分析
import baseConfig from './webpack.config'

// import config from '../config/webpack'

// @ts-ignore
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
// if (config.build.bundleAnalyzerReport) {
//     webpackProdConfig.plugins.push(new BundleAnalyzerPlugin())
// }

export default webpackProdConfig
