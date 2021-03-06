
import webpack from 'webpack'
import ora from 'ora'

import config from './webpack.prod'

const spinner = ora('Webpack is compiling build ...\n')
spinner.color = 'green'
spinner.start()


webpack(config).run((err, stats) => {
    if (err) {
        console.log('Webpack compile failure')
    } else {
        spinner.stop()
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        console.log('Webpack compiler finished successfully! See ./dist.')
    }
})