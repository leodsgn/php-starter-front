const gulp = require("gulp");
const webpack = require("webpack-stream");
const path = require("../../path");
const wp_config = require(path.root + "/webpack.config.js");

gulp.task("build:scripts", function(){
    gulp.src(path.scripts + "/index")
    .pipe(webpack(wp_config))
    .pipe(gulp.dest(path.dist + "/scripts"))
})