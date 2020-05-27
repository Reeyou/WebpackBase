
// eslint-disable-next-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function cssLoaders(options) {
    options = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap,
        },
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap,
        },
    }
    const px2remLoader = {
        loader: 'px2rem-loader',
        options: {
            remUint: 54,
        },
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        // const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

        const loaders = [cssLoader, px2remLoader]

        if (options.usePostCSS) {
            loaders.push(postcssLoader)
        }

        if (loader) {
            loaders.push({
                loader: `${loader}-loader`,
                options: { ...loaderOptions, sourceMap: options.sourceMap },
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader',
            })
        }
        return ['vue-style-loader'].concat(loaders)
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus'),
    }
}

module.exports = cssLoaders
