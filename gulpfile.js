var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var jsvalidate = require('gulp-jsvalidate');
var concat = require('gulp-concat');
var replace = require('gulp-html-replace');

var paths = {
    html: {
        src: [
            'src/**/*.html'
        ],
        dest: 'dist'
    },
    css: {
        src: [
            'node_modules/milligram/dist/milligram.css'
        ],
        dest: 'dist/assets/css/',
        file: 'styles-1.0.0.min.css'
    },
    scripts: {
        src: [
            'node_modules/firebase/firebase.js',
            'node_modules/vue/dist/vue.js',
            'src/components/app.js'
        ],
        dest: 'dist/assets/js/',
        file: 'scripts-1.0.0.min.js'
    },
    images: {
        src: [
            'src/assets/images/**/*.*'
        ],
        dest: 'dist/assets/images/'
    },
    watch: {
        files: ['src/app/**/*.*'],
        tasks: ['default']
    }
};

gulp.task('build', function () {
    gulp.src(paths.css.src)
        .pipe(concat(paths.css.file))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.css.dest));

    gulp
        .src(paths.scripts.src)
        .pipe(jsvalidate())
        .pipe(concat(paths.scripts.file))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(paths.scripts.dest));

    gulp.src(paths.html.src)
        .pipe(replace({
            css: ['assets/css/styles-1.0.0.min.css'],
            js: ['assets/js/scripts-1.0.0.min.css'],
            app: ['assets/css/app-1.0.0.min.css']
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest))

    gulp
        .src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
})

gulp.task('default', ['build']);