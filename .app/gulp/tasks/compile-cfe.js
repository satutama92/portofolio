module.exports = function (gulp, plugins, config, jsx) {
	function compile(opts) {
		opts = opts || {};

		return plugins.through2.obj(function (file, enc, cb) {
			if (file.isNull()) {
				cb(null, file);
				return;
			}

			if (file.isStream()) {
				cb(new plugins.util.PluginError('gulp-react', 'Streaming not supported'));
				return;
			}

			try {
				if (file.sourceMap) {
					opts = plugins.objectAssign(opts, {
						sourceFilename: file.relative
					});
				}

				var res = jsx.client(file.contents.toString(), opts).toString();

				file.contents = new Buffer(res);
				file.path = plugins.util.replaceExtension(file.path, '.js');

				if (res.sourceMap && file.sourceMap) {
					applySourceMap(file, res.sourceMap);
				}

				this.push(file);
			} catch (err) {
				this.emit('error', new plugins.util.PluginError('gulp-react', err, {
					fileName: file.path
				}));
			}

			cb();
		});
	}

  return function () {

		var jsx = gulp.src( config.cfe.src[0] )
			.pipe( compile() )
			.pipe( plugins.declare({
				processName: function(filePath) {
					return plugins.declare.processNameByPath( removeSrcFromPath(filePath) );
				},
				noRedeclare: true
			}))
			.pipe( plugins.concat(config.cfe.name.full) );

		var callbacks = gulp.src( config.cfe.src[1] )
			.pipe( plugins.declare({
				processName: function(filePath) {
					return plugins.declare.processNameByPath( removeSrcFromPath(filePath) ) + '.callbacks';
				},
				noRedeclare: true
			}))
			.pipe( plugins.concat(config.cfe.name.full) );

		plugins.merge2( jsx, callbacks )
			.pipe( plugins.concat(config.cfe.name.full) )
			.pipe( plugins.minify({
				ext:{
					src: '.js',
					min: config.cfe.name.min
				}
			}))
			.pipe(gulp.dest( config.cfe.dest ));

		function removeSrcFromPath (filePath) {
			return filePath.replace( 'src', '' );
		}

  };
};