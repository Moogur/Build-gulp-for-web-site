"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const webpack = require("webpack-stream");
const changed = require("gulp-changed");

const path = require("./path.js");
const webConfig = require("./webpack.js");

module.exports = function() {
    return gulp.src(path.scripts.src)
        .pipe(changed(path.scripts.dist))
        .pipe(webpack(webConfig))
        .pipe(gulp.dest(path.scripts.dist))
        .pipe(browserSync.stream());
};
