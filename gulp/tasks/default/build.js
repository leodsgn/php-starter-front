const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task("build", function(){
    runSequence([
        "build:scripts",
        "build:styles",
        "build:images"
    ])
})