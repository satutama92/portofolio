module.exports = function (gulp, plugins, config) {
	return function(){
		return gulp.src( config.js.src )
				.pipe( plugins.sourcemaps.init() )
				.pipe( plugins.concat( config.js.name.full ) )
				.pipe( plugins.minify({
					ext:{
						src:'.js',
						min: config.js.name.min
					}
				}))
				.pipe( gulp.dest( config.js.dest ) );
  };
};