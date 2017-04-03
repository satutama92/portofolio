var app 		= '../';
var src 		= './src/';
var dest 		= '../dist/';

module.exports = {
	server: {
		baseDir: app,
		proxy:  'https://marynew.dev.dd:8443/',
		https: true,
		files: [
			dest + "/**/*.*",
			"!" + dest + "/**/*.map"
		]
	},
	sass: {
		src: [
			src + 'scss/*.{sass,scss}'
		],
		name:{
			full: 'style.css',
			min:  '.min.css',
			map:  'style.css.map'
		},
		watch: [
			src + 'scss/**/*.{sass,scss}'
		],
		dest: dest + 'css'
	},
	js: {
		src: [
			src + 'js/**/*.js'
		],
		name:{
			full: 'script.js',
			min:  '.min.js',
			map:  'script.js.map'
		},
		watch: [
			src + 'js/**/*.{js,jsx}'
		],
		dest: dest + 'js'
	},
	cfe: {
		src: [
			src + 'cfe/**/*.jsx',
			src + 'cfe/**/*.js'
		],
		name:{
			full: 'template.js',
			min:  '.min.js',
			map:  'template.js.map'
		},
		dest: dest + 'js'
	},
};
