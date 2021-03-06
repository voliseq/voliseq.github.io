/**
 * Created by Maciej on 2017-03-21.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    live = require('gulp-livereload'),
    concat = require("gulp-concat");

gulp.task("sass", function(){

    return gulp.src('./sass/style.scss')
        .pipe(concat('custom.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

});

gulp.task('html', function(){
    return gulp.src(['./index.html'])
        .pipe(live());
});

gulp.task('watch', function(){
    live.listen();
    gulp.watch(['./sass/*.scss', '*.html'], gulp.series(['sass', ['html']]));
});
