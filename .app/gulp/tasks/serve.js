module.exports = function (gulp, plugins, config) {
  return function() {
		plugins.browserSync.init({
			proxy: config.server.proxy,
      https: config.server.https
		});

		gulp.watch( config.cfe.src, ['cfe'] );
		gulp.watch( config.sass.watch, ['sass'] );
		gulp.watch( config.js.src, ['js'] );
  };
};
