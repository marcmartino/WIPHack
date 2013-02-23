/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		fileName: "wipHack",
		meta: {
			banner: ""
			// '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			// 	'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			// 	'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
			// 	'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			// 	' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		concat: {
			dist: {
				src: ["src/views/*.view.js", 'src/object*.js', "src/*.js"],
				dest: 'dist/<%= fileName %>.js'
			}
		},
		min: {
			dist: {
				src: ['<config:concat.dist.dest>'],
				dest: 'dist/<%= fileName %>.min.js'
			}
		},
		// qunit: {
		// 	files: ['test/**/*.html']
		// },
		watch: {
			files: ['src/*.js', "js/views/*.view.js"],
			tasks: 'build'
		},
		uglify: {}
	});

	// Default task.
	grunt.registerTask('default', 'concat min');

};