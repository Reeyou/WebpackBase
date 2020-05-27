
const cssLoaders = require('./utils')

const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = true

module.exports = {
    loaders: cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction,
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: true,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
    },
}
