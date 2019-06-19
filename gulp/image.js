"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const image = require("gulp-image");
const changed = require("gulp-changed");

const path = require("./path.js");

module.exports = function() {
    return gulp.src(path.images.src)
        .pipe(changed(path.images.dist))
        .pipe(image({
            pngquant: ["--speed=1", "--force", 256],
            mozjpeg: ["-quality", 75]
        }))
        .pipe(gulp.dest(path.images.dist))
        .pipe(browserSync.stream());
};
