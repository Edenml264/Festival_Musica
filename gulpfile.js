const { series, src, dest, watch } = require('gulp');
<<<<<<< HEAD
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
=======
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
>>>>>>> 4858035f5e53d00bd8dda55d15abf03b10f72241

// Función que compila SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss'
}

function css( ) {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css'))
}

function minificarcss( ) {
    return src(paths.scss)
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

function imagenes() {
    return src(paths.imagenes)
    .pipe( imagemin() )
    .pipe( dest( './build/img'))
    .pipe( notify( {message: 'Imagen Minificada'}) );
}
function versionWebp() {
    return src(paths.imagenes)
    .pipe( webp() )
    .pipe( dest('./build/img'))
    .pipe( notify({message: 'Versión webP lista'}) );
}

function watchArchivos() {
    watch( paths.scss, css );
}

exports.css = css;
exports.minificarcss = minificarcss;
<<<<<<< HEAD
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagenes, versionWebp, watchArchivos);
=======
exports.images = images;
exports.watchArchivos = watchArchivos;
>>>>>>> 4858035f5e53d00bd8dda55d15abf03b10f72241
