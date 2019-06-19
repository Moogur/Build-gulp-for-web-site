"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const spritesmith = require("gulp.spritesmith");
const merge = require("merge-stream");
const fs = require("fs");

const path = require("./path.js");

module.exports = function() {
    // Если есть, удаляем файл с именем sprite.png
    fs.unlink(`${path.path}/../${path.sprite.distImg}/sprite.png`, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log(`File sprite.png is deleted`);
        }
    });
    let spriteData = gulp.src(path.sprite.src)
        .pipe(spritesmith({
            imgName: "sprite.png",
            cssName: "_sprite.sass",
            cssFormat: "sass",
            algoritm: "binary-tree",
            cssTemplate: "./gulp/sprite.mustache",
            cssVarMap: function(sprite) {
                sprite.name = "s-" + sprite.name;
            }
        }).on("error", console.log));
    // Сохранение спрайта (png)
    let imgStream = spriteData.img
        .pipe(gulp.dest(path.sprite.distImg));
    // Сохранение sass файла
    let sassStream = spriteData.css
        .pipe(gulp.dest(path.sprite.distSass));
    // Запуск gulp таска оновременно для спрайта и sass
    return merge(imgStream, sassStream)
        .on("error", console.log)
        .pipe(browserSync.stream());
};
