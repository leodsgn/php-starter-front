const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const path = require("../../path");

gulp.task("build:images", function(){
    gulp.src(path.images + "/**")
    .pipe(imagemin())
    .pipe(gulp.dest(path.dist + "/images"))
})
