/* eslint-disable import/no-extraneous-dependencies */
import merge from 'webpack-merge'
import webpack from 'webpack'
// @ts-ignore
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
// @ts-ignore
import DashboardPlugin from 'webpack-dashboard/plugin'
// @ts-ignore
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import chalk from 'chalk'
import baseConfig from './webpack.config'

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

Object.keys(baseConfig.entry).forEach((name) => {
    // entry array add webpack-hot-middleware
    // @ts-ignore
    baseConfig.entry[name] = [hotMiddlewareScript].concat(baseConfig.entry[name])
})

// @ts-ignore
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
