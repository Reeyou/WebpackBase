/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const baseConfig = require('./webpack.config.js')

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

Object.keys(baseConfig.entry).forEach((name) => {
    // entry array add webpack-hot-middleware
    baseConfig.entry[name] = [hotMiddlewareScript].concat(baseConfig.entry[name])
})

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new FriendlyErrorsPlugin(),
        new ProgressBarPlugin({
            format: `build [:bar] ${chalk.cyan.bold(':percent')} (:elapsed seconds)`,
        }),
    ],
})
