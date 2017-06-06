const gulp = require("gulp");
const connect = require("gulp-connect-php");
const browserSync = require("browser-sync");
const path = require("../../path");


gulp.task("server", function(){
    connect.server({}, function(){
        browserSync({
        files: [
            path.root + "/**/**/*.php",
            path.dist + "/**/**/**/*"
        ],
        proxy: "localhost:8000"
    })
    })
})