/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
// @ts-ignore
import { CleanWebpackPlugin } from 'clean-webpack-plugin' // clear dist/
// @ts-ignore
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin' // 优化压缩css资源
// @ts-ignore
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer' // 构建bundle 分析
// @ts-ignore
import ScriptExtHtmlPlugin from 'script-ext-html-webpack-plugin' // html-webpack-plugin扩展插件
// @ts-ignore
import CopyWebpackPlugin from 'copy-webpack-plugin'
// @ts-ignore
import baseConfig from './webpack.base.conf'

import config from '../config/webpack'

// @ts-ignore
const webpackProdConfig = merge(baseConfig, {
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**'] //不删除dll目录
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
            },
        }),
        new ScriptExtHtmlPlugin({
            custom: [
                {
                    test: /\.js$/,
                    attribute: 'crossorigin',
                    value: 'anonymous',
                },
            ],
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, 'dll'),
            to: path.join(__dirname, 'dist', 'dll')
            }]
        }),
        new BundleAnalyzerPlugin()
    ],
})

// npm run build --report
// @ts-ignore
// if (config.build.bundleAnalyzerReport) {
//     webpackProdConfig.plugins.push(new BundleAnalyzerPlugin())
// }

export default webpackProdConfig
