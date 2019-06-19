"use strict";

const gulp = require("gulp");
const ttf2woff = require("gulp-ttf2woff");
const browserSync = require("browser-sync").create();
const fs = require("fs");
const changed = require("gulp-changed");

const path = require("./path.js");

module.exports = function() {
    const fd = fs.openSync(`${path.path}/../src/sass/core/_fonts.sass`, "w+");
    const folder = fs.readdirSync(`${path.path}/../src/fonts`);
    for (let file of folder) {
        if (file.split(".")[1] === "ttf") {
            fs.writeFileSync(fd, `@font-face\n  font-family: "${file.split(".")[0]}"\n  src: url("../fonts/${file.split(".")[0]}.woff")\n$${file.split(".")[0].split("-").pop()}: ${file.split(".")[0]}\n\n`, { flag: "a" });
        }
    }
    return gulp.src(path.fonts.src)
        .pipe(changed(path.fonts.dist))
        .pipe(ttf2woff())
        .pipe(gulp.dest(path.fonts.dist))
        .pipe(browserSync.stream());
};
