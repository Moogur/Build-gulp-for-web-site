"use strict";

const gulp = require("gulp");
const ghPages = require("gulp-gh-pages");

const path = require("./path.js");

module.exports = function() {
    return gulp.src(path.github)
        .pipe(ghPages());
};
