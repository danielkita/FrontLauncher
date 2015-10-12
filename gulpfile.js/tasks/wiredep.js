var gulp = require('gulp');
var config = require('../config');
var path = require('path');
var wiredep = require('wiredep').stream;
var options = {
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
gulp.task('wiredep', function(callback) {
    gulp.src(path.resolve(config.root.src , config.tasks.html.src , '**/*.html'))
        .pipe(wiredep(options))
        .pipe(gulp.dest(path.resolve(config.root.src , config.tasks.html.src)));
    callback();
});