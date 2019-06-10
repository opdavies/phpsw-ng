let mix = require('laravel-mix')
let glob = require('glob-all')
let PurgecssPlugin = require('purgecss-webpack-plugin')

require('laravel-mix-tailwind')

mix.disableNotifications()
    .less('app/resources/assets/less/main.less', 'web/build/css/site.css')
    .copyDirectory('app/resources/assets/static', 'web/build/static')
    .copyDirectory('node_modules/font-awesome/fonts', 'web/build/fonts')
    .tailwind('./tailwind.config.js')
    .options({
        processCssUrls: false
    })

mix.browserSync({
    proxy: '127.0.0.1:8000',
    notify: false,
    open: false,
    files: ['./web']
})




