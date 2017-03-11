var gulp = require('gulp');
var shell = require('gulp-shell');


gulp.task('cookie', shell.task([
    'node cookies-express.js'
]));

gulp.task('session', shell.task([
    'node session-express.js'
]));


gulp.task('npm-cookie', shell.task([
    'node cookie.js'
]));
