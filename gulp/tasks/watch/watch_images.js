const gulp = require("gulp");
const watch = require("gulp-watch");
const path = require("../../path");
const imagemin = require("gulp-imagemin");
const batch = require("gulp-batch");


gulp.task("watch:images", ["build:images"], function(){
    watch(path.images + "/**/*.{jpg|png|svg}", {ignoreInitial: true}, batch(function(event, done){
        gulp.start("build:images", done);
    }))
})