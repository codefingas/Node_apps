var gulp = require("gulp");
var nodemon =  require('gulp-nodemon');

var jsFiles = ["*.js", "src/**/*.js", "assets/**/*.js"];

gulp.task("inject", function(){
	var wiredep = require('wiredep').stream;
	var inject = require('gulp-inject');
	var options = {
		bowerJson: require('./bower.json'),
		directory: './assets/lib',
		
	}
	var injectSrc = gulp.src(["./assets/css/*.css",
							 "./assets/js/*.js"], {read: false});
	var injectOptions = {
		ignorePath: "../."
	};

	return gulp.src('./src/views/*.ejs')
		.pipe(wiredep(options))
		.pipe(inject(injectSrc, injectOptions))
		.pipe(gulp.dest('./src/views'));
});
gulp.task('serve', ['inject'], function(){
	var options = {
		delayTime: 1,
		env: {
			"PORT": 3000
		},
		watch: jsFiles 
	}

	return nodemon(options)
		.on("restart", function(){
			console.log("Restarting ####S3rv3r");
		})
})