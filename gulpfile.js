"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const path = require("./gulp/path.js");
const htmlmin = require("./gulp/pug.js");
const font = require("./gulp/font.js");
const image = require("./gulp/image.js");
const style = require("./gulp/style.js");
const script = require("./gulp/script.js");
const clean = require("./gulp/clean.js");
const github = require("./gulp/github.js");
const sprite = require("./gulp/sprite.js");


function watch() {
    browserSync.init({ server: { baseDir: path.baseDir }, browser: path.browsers.chrome });
    gulp.watch(path.styles.srcWatch, style);
    gulp.watch(path.scripts.srcWatch, script);
    gulp.watch(path.pug.srcWatch, htmlmin);
    gulp.watch(path.images.srcAll, gulp.series(sprite, image));
    gulp.watch(path.fonts.src, font);
}


gulp.task("html", htmlmin);
gulp.task("style", style);
gulp.task("script", script);
gulp.task("image", gulp.series(sprite, image));
gulp.task("font", font);
gulp.task("del", gulp.series(clean, sprite, htmlmin, font, gulp.parallel(image, style, script)));
gulp.task("default", gulp.series("del", watch));
gulp.task("deploy", github);
