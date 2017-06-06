const gulp = require("gulp");
const requireDir = require("require-dir");
const runSequence = require("run-sequence");

requireDir("./gulp/tasks", {recurse: true})

gulp.task("default", function(){
    runSequence(
        "watch",
        "server"
    )
})