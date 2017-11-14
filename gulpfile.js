// gulpfile.js

var gulp = require('gulp');

gulp.task('default', [], function() {
	console.log("Moving build folder");
	gulp.src("build/**/*")
		.pipe(gulp.dest('../dnd-gen2FBP/build'));
});