"use strict";

const del = require("del");

const path = require("./path.js");

module.exports = function() {
    return del([path.baseDir]);
};
