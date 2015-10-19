module.exports = {
    root: {
        src: './src',
        dest: './public',
    },
    tasks: {
        sass: {
            src: 'assets/sass',
            dest: 'assets/css',
            main: 'app.scss',
            extensions: ['sass', 'scss'],
            sassGlobbing: {
                extensions: ['.scss']
            }
        },
        bower: {
            src: './bower_components',
            extensions: ['gif', 'jpg', 'png', 'woff', 'eot', 'svg', 'ttf']
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
            extensions: ['js']
        },
        svg: {
            src: 'assets/sprites',
            dest: 'assets/img',
            extensions: ['svg']
        },
        iconFont: {
            src: 'assets/icons',
            dest: 'assets/fonts',
            sassDest: '',
            extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
        }
    }
}