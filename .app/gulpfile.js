var gulp 					= require('gulp'),
		jsx 					= require('./react-jsx'),
		config 				= require('./gulp/config'),
		plugins 			= require('gulp-load-plugins')({
        pattern: '*'
    });


// Get tasks
function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp, plugins, config, jsx);
}


// Compile
gulp.task( 'js', getTask('compile-js') );
gulp.task( 'cfe', getTask('compile-cfe') );
gulp.task( 'sass', getTask('compile-sass') );


// Build
gulp.task( 'build', ['cfe', 'js', 'sass'] );


// Watch and serve
gulp.task( 'serve', ['build'], getTask('serve') );
gulp.task( 'default', ['serve'] );
