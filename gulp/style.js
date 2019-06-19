"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const mqpacker = require("css-mqpacker");
const uncss = require("postcss-uncss");
const gulpif = require("gulp-if");
const sourcemaps = require("gulp-sourcemaps");
const changed = require("gulp-changed");

const path = require("./path.js");

module.exports = function() {
    return gulp.src(path.styles.src)
        .pipe(changed(path.styles.dist))
        .pipe(gulpif(path.isDev, sourcemaps.init()))
        .pipe(sass({
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(gulpif(path.isProd, postcss([
            uncss({html: [`${path.pug.dist}/**/*.html`]}),
            mqpacker(),
            autoprefixer(),
            cssnano({preset: ["default", {
                discardComments: {removeAll: true}
            }]})
        ])))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.styles.dist))
        .pipe(browserSync.stream());
};
