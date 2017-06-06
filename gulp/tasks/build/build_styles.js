const gulp = require("gulp");
const stylus = require("gulp-stylus");
const koutoSwiss = require("kouto-swiss");
const jeet = require("jeet");
const rupture = require("rupture");
const path = require("../../path");


gulp.task("build:styles", function(){
    gulp.src(path.styles + "/index.styl")
    .pipe(stylus({
        use: [koutoSwiss(), jeet(), rupture()],
        compress: true,
        sourcemap: true
    }))
    .pipe(gulp.dest(path.dist + "/styles"))
})

