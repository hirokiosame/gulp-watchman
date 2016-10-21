const gulp = require('gulp');
const watchman = require('./lib');

gulp.task('build', function () {
	console.log('*Build logic*');
});

gulp.task('watch', function() {

	watchman('./testWatchDir', {
		expression: [
			'allof',

			['match', '*'],
			['type', 'f'],
		]
	}, ['build']);
	// .pipe(gulp.dest('build'));
});