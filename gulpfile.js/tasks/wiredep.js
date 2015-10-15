var gulp = require('gulp');
var config = require('../config');
var path = require('path');
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function() {
    gulp.run('wiredep-html');
    gulp.run('wiredep-sass');
});

var optionsHTML = {
    ignorePath: '../../../' + path.normalize(config.root.dest) + '/',
    overrides: {
        'modernizr': {
            "main": 'modernizr.js'
        },
        "isotope": {
            "main": ["./dist/isotope.pkgd.min.js"],
            "dependencies": {},
            "devDependencies": {},
        },
        "cssmap-poland": {
            "main": ["jquery.cssmap.js", "./cssmap-poland/cssmap-poland.css"]
        },
        "jQuery-Validation-Engine": {
            "main": ["./js/jquery.validationEngine.js", "./js/languages/jquery.validationEngine-pl.js", "./css/validationEngine.jquery.css"]
        },
    },
    devDependencies: true,
    dependencies: true,
};

gulp.task('wiredep-html', function(callback) {
    gulp.src([path.resolve(config.root.src, '**/*.html'),])
        .pipe(wiredep(optionsHTML))
        .pipe(gulp.dest(path.resolve(config.root.src)));
    callback();
});


var optionsSASS = {
    devDependencies: true,
    dependencies: true
}


gulp.task('wiredep-sass', function(callback) {
    gulp.src([path.resolve(config.root.src, '**/*.scss'),])
        .pipe(wiredep(optionsSASS))
        .pipe(gulp.dest(path.resolve(config.root.src)));
    callback();
});

