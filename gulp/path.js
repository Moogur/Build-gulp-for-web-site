"use strict";
/* global __dirname process */

module.exports = {
    "isDev": !(process.argv.indexOf("--prod") !== -1),
    "isProd": (process.argv.indexOf("--prod") !== -1),
    "styles": {
        "srcWatch": "./src/sass/**/*.sass",
        "src": "./src/sass/style*.sass",
        "dist": "./dist/css"
    },
    "scripts": {
        "srcWatch": "./src/js/**.*js",
        "src": "./src/js/main*.js",
        "dist": "./dist/js"
    },
    "pug": {
        "srcWatch": "./src/pug/**/*.pug",
        "src": "./src/pug/*.pug",
        "dist": "./dist"
    },
    "images": {
        "src": [
            "./src/img/**/*.+(jpg|jpeg)",
            "./src/img/sprit?.png",
            "!./src/img/maket*.*"
        ],
        "srcAll": "./src/img/**/*.+(jpg|jpeg|png)",
        "dist": "./dist/img"
    },
    "sprite": {
        "src": "./src/img/**/*.png",
        "distImg": "src/img",
        "distSass": "./src/sass/sprite"
    },
    "fonts": {
        "src": "./src/fonts/**/*.+(ttf|woff|otf|woff2)",
        "dist": "./dist/fonts"
    },
    "baseDir": "./dist",
    "github": "./dist/**/*",
    "browsers": {
        "firefox": "firefox developer edition",
        "chrome": "google chrome"
    },
    "path": __dirname
};
