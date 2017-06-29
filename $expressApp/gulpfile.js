var gulp = require("gulp");


gulp.task("inject", function(){
	var wiredep = require('wiredep').stream;
	var options = {
		bowerJson: require('./bower.json'),
		directory: './assets/lib',
		ignorePath: '../../assets'
	}

	return gulp.src('./src/views/*.html')
		.pipe(wiredep(options))
		.pipe(gulp.dest('./src/views'));
})