"use strict";

const gulp = require("gulp");
const ttf2woff = require("gulp-ttf2woff");
const browserSync = require("browser-sync").create();
const fs = require("fs");
const changed = require("gulp-changed");

const path = require("./path.js");

module.exports = function() {
    return gulp.src(path.fonts.src)
        .pipe(changed(path.fonts.dist))
        .pipe(ttf2woff())
        .pipe(gulp.dest(path.fonts.dist))
        .pipe(browserSync.stream());
};
