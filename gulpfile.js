var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var uglify = require('gulp-uglify');
var pump = require('pump');
var csso = require('gulp-csso');

//sass
gulp.task('sass', function () {
   sass('./src/sass/en/*.sass',{style:'compressed'})
    .on('error', sass.logError)
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
	.pipe(gulp.dest('./public/js'));

})

//css minify
gulp.task('csso', function () {
    return gulp.src('./public/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./public/css'));
});

//js uglify
gulp.task('compress', function (cb) {
  pump([
        gulp.src('public/js/*.js'),
        uglify(),
        gulp.dest('public/js/')
    ],
    cb
  );
});

//connect 
gulp.task('server',function(){
	connect.server({
		root: './',
		livereload: true
	})
})

//default
gulp.task('default',['watch','server','compress','csso'])