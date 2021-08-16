const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

// Función que compila SASS

function css( ) {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css'))
}

function minificarcss( ) {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }))
        .pipe( dest('./build/css'))
}

function images(){
    return src('src/img/**/*')
        .pipe( imagemin() )
        .pipe( dest( './build/img' ))
}

function watchArchivos() {
    watch( 'src/scss/**/*.scss', css );
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.images = images;
exports.watchArchivos = watchArchivos;