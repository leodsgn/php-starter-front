const gulp = require("gulp");
const stylus = require("gulp-stylus");
const koutoSwiss = require("kouto-swiss");
const jeet = require("jeet");
const rupture = require("rupture");
const path = require("../../path");
const watch = require("gulp-watch");
const batch = require("gulp-batch");


gulp.task("watch:styles", ["build:styles"], function(){
     watch(path.styles + "/**/**/*.styl", batch(function(event, done){
         gulp.start("build:styles", done);
     }))
})