const { src, dest, series, parallel } = require('gulp');

const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass')); 
const sourcemaps = require('gulp-sourcemaps'); 
const uglify = require('gulp-uglify'); 
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function compileJavascript() {
    return src('script_src/*.js')
        .pipe(babel())
        .pipe(uglify()) // uglify 只改 local 變數，而不改全域變數
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('script_dist'))
}

function compileCSS() {
        var plugins = [
            autoprefixer({browsers: ['last 1 version']}),
        ];
       return src('scss_src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write(''))
        .pipe(dest('scss_src'));
}



// 以 sequence 方式執行
//exports.default = series(compileCSS, compileJavascript);
exports.default = parallel(compileCSS, compileJavascript);
