module.exports = {
    root: {
        src: './src',
        dest: './public',
    },
    tasks: {
        assets: ['staticAssets', 'fonts', 'iconFont', 'images', 'svg'],
        code: ['html', 'sass', 'js'],
        sass: {
            src: 'assets/sass',
            dest: 'assets/css',
            main: 'app.scss',
            extensions: ['sass', 'scss'],
            autoprefixer: {
                browsers: ["> 0.1% in PL"]
            },
            sassGlobbing: {
                extensions: ['.scss']
            }
        },
        staticAssets: {
            src: 'assets/static',
            dest: './'
        },
        bower: {
            src: './bower_components',
            extensions: ['gif', 'jpg', 'png', 'woff', 'woff2', 'eot', 'svg', 'ttf']
        },
        html: {
            src: './',
            dest: './',
            dataFile: 'data/template.json',
            extensions: ['html', 'json'],
            excludeFolders: ['layouts', 'components', 'data']
        },
        images: {
            src: 'assets/img',
            dest: 'assets/img',
            extensions: ['jpg', 'png', 'svg', 'gif']
        },
        js: {
            src: 'assets/js',
            dest: 'assets/js',
            extractSharedJs: true,
            entries: {
                app: ["./app.js"]
              },
            extensions: ['js']
        },
        svg: {
            src: 'assets/sprites',
            dest: 'assets/img',
            extensions: ['svg']
        },
        fonts: {
            src: "assets/fonts",
            dest: "assets/fonts",
            extensions: ["woff2", "woff", "eot", "ttf", "svg"]
        },
        iconFont: {
            src: 'assets/icons',
            dest: 'assets/fonts',
            sassDest: 'stylesheets/components',
            extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
        }
    }
}