const gulp = require("gulp");
const runSequence = require("run-sequence");


gulp.task("watch", function(){
    runSequence([
        "watch:scripts",
        "watch:styles",
        "watch:images"
    ])
})