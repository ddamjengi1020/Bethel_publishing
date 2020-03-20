const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const del = require("del");
const ghPages = require("gulp-gh-pages");

const paths = {
  img: {
    src: "images/**/*",
    dest: "bundle/images"
  },
  css: {
    src: "assets/*.css",
    dest: "bundle"
  },
  js: {
    src: "assets/js/*.js",
    dest: "bundle"
  }
};

function clean() {
  return del(["bundle"]);
}

function js() {
  return gulp.src(paths.js.src).pipe(gulp.dest(paths.js.dest));
}

function image() {
  return gulp
    .src(paths.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img.dest));
}

function styles() {
  return gulp
    .src(paths.css.src)
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 2 versions"]
      })
    )
    .pipe(concat("styles.css"))
    .pipe(csso())
    .pipe(gulp.dest(paths.css.dest));
}

function deploy() {
  return gulp.src("./**/*").pipe(ghPages());
}

const dev = gulp.series([clean, styles, image, js]);

module.exports.dev = dev;

module.exports.deploy = deploy;
