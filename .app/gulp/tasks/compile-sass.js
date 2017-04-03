module.exports = function (gulp, plugins, config) {
  return function(){
		return gulp.src( config.sass.src )
				.pipe( plugins.sassGlob() )
        .pipe( plugins.sourcemaps.init() )
				.pipe( plugins.sass({ outputStyle: 'compressed' }).on( 'error', plugins.sass.logError ) )
        .pipe( plugins.autoprefixer() )
				.pipe( plugins.sourcemaps.write( '/maps' ) )
        .pipe( gulp.dest( config.sass.dest ) )
				.pipe( plugins.browserSync.stream( {match: '**/*.css'} ) );
  };
};
