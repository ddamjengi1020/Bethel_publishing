const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const del = require("del");

const paths = {
  img: {
    src: "images/**/*",
    dest: "bundle/images"
  },
  css: {
    src: "assets/*.css",
    dest: "bundle/css"
  },
  js: {
    src: "assets/js/*.js",
    dest: "bundle/js"
  }
};

function clean() {
  return del(["bundle"]);
}

function styles() {
  return gulp
    .src(paths.css.src)
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 2 versions"]
      })
    )
    .pipe(csso())
    .pipe(gulp.dest(paths.scss.dest));
}

export const dev = gulp.series([clean, styles]);
