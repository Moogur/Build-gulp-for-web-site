"use strict";

const path = require("./path.js");

module.exports = {
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                },
                exclude: "/node_modules/"
            }
        ]
    },
    devtool: path.isProd ? "none" : "cheap-module-eval-source-map",
    mode: path.isProd ? "production" : "development"
};
