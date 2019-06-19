"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const pugbem =require("/Users/dilkree/IT/JS_MODULES/my_modules/gulp-pugbem");

const path = require("./path.js");

module.exports = function() {
    return gulp.src(path.pug.src)
        .pipe(pug({
            pretty: path.isProd ? false : true,
            plugins: [pugbem]
        }).on("error", console.log))
        .pipe(gulp.dest(path.pug.dist))
        .pipe(browserSync.stream());
};
