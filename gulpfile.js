"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// this function will initialize our dev browser and watch files for changes
// to trigger live reloads
function watch() {
    browserSync.init({
        server: {
            // indicate the root to be hosted on our dev server
            baseDir: "./"
        }
    });
    // each of these watch callbacks will take a location to watch
    // as a first argument and a callback to invoke when a change occurs
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./assets/js/**/*.js").on("change", browserSync.reload);
}

// here we export the gulp commands for access in our terminal
exports.watch = watch;