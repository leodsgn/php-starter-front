const gulp = require("gulp");
const watch = require("gulp-watch");
const path = require("../../path");
const batch = require("gulp-batch");


gulp.task("watch:scripts", ["build:scripts"], function(){
    watch(path.scripts + "/**/**/*.js", batch(function(event, done){
        gulp.start("build:scripts", done)
    }));
})