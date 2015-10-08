module.exports = {
    root: {
        src: './src',
        dest: './public',
    },
    assets: {
        js: '/assets/js',
        css: '/assets/css',
        html: './'
    },
    tasks: {
        sass: {
            src: 'sass',
            dest: '/assets/css',
            main: 'app.scss',
            extensions: ['sass', 'scss'],
            sassGlobbing: {
                extensions: ['.scss']
            }
        },
        bower: {
            src: './bower_components',
            extensions: ['gif','jpg','png','woff','eot','svg','ttf']
        },
        html: {
            src: 'html',
            dest: './',
            dataFile: 'data/template.json',
            htmlmin: {
                collapseWhitespace: true
            },
            extensions: ['html', 'json'],
            excludeFolders: ['layouts', 'shared', 'macros', 'data']
        }
    }
}