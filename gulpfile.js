var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var uglify = require('gulp-uglify');
var pump = require('pump');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

//sass
gulp.task('sass', function () {
   sass('./src/sass/en/*.sass',{style:'compressed'})
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass-ar', function () {   
   sass('./src/sass/ar/*.sass',{style:'compressed'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});

//watch 
gulp.task('watch',function(){
	gulp.watch('./src/sass/en/*.sass',['sass'])
 	gulp.watch('./src/sass/ar/*.sass',['sass-ar'])
	gulp.watch('./*.html',['html'])
	gulp.watch('./src/js/*.js',['js'])
})


//html
gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(connect.reload());

})

//js
gulp.task('js', function() {
	gulp.src('./src/js/*.js')
  .pipe(connect.reload())
	.pipe(gulp.dest('./public/js'));

})


//connect 
gulp.task('server',function(){
	connect.server({
		root: './',
		livereload: true
	})
})

//default
gulp.task('default',['watch','server','sass'])