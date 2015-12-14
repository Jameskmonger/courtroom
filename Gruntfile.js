module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
      unit: {
        options: {
          configFile: 'karma.conf.js'
        }
      }
		},
    coveralls: {
      options: {
        debug: true,
        coverageDir: 'coverage/',
        dryRun: true,
        force: true,
        recursive: true
      }
    }
	});

	grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-karma-coveralls');

	grunt.registerTask('test', ['karma', 'coveralls']);
};
