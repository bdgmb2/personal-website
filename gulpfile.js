var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-csso');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('default', function() {
    // CSS
    gulp.src('css/sources/**/*.css')
        .pipe(minifyCSS())
        .pipe(concat('pagesource.css'))
        .pipe(gulp.dest('css'));

    // LESS
    gulp.src('css/sources/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'));

    // JAVASCRIPT
    gulp.src([
        'js/sources/dist/wordcloud2.js',
        'js/sources/dist/fontawesome.min.js',
        'js/sources/index.js'
    ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});