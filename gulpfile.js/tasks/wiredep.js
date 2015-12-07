var gulp = require('gulp');
var config = require('../config');
var path = require('path');
var handleErrors = require('../lib/handleErrors')
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function() {
    gulp.run('wiredep-html');
    gulp.run('wiredep-sass');
});

var optionsHTML = {
    ignorePath: '../' + path.normalize(config.root.dest) + '/',
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
        "semantic-ui-sass": {
            "main": ["./app/assets/stylesheets/_semantic-ui.scss","./app/assets/javascripts/semantic-ui.js"]
        },
        "semantic": {
            "main": ["dist/semantic.css","dist/semantic.js"]
        },
        "semantic-ui-rating": {
            "main": ["rating.css","rating.js"]
        },
        "semantic-ui-dropdown": {
            "main": ["dropdown.css","dropdown.js"]
        },
        "semantic-ui-transition": {
            "main": ["transition.css","transition.js"]
        },
        "semantic-ui-accordion": {
            "main": ["accordion.css","accordion.js"]
        },
        "responsive-tabs": {
            "main": ["./js/jquery.responsiveTabs.js"]
        },
    },
    devDependencies: true,
    dependencies: true,
};

gulp.task('wiredep-html', function(callback) {
    gulp.src([path.join(config.root.src, '*.html'),])
        .pipe(wiredep(optionsHTML))
        .on('error', handleErrors)
        .pipe(gulp.dest(path.resolve(config.root.src)));
    callback();
});


var optionsSASS = {
    devDependencies: true,
    dependencies: true
}


gulp.task('wiredep-sass', function(callback) {
    gulp.src([path.resolve(config.root.src, '**/app.scss'),])
        .pipe(wiredep(optionsSASS))
        .on('error', handleErrors)
        .pipe(gulp.dest(path.resolve(config.root.src)));
    callback();
});

