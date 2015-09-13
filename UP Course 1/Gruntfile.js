// Gruntfile.js

module.exports = function(grunt) {

	grunt.initConfig({
		nodemon: {
			dev: {
				script: 'server.js'
			}
		},
		sass: {
       	 	options: {
        	    sourceMap: true
        	},
	        dist: {
	            files: {
	                'app/styles/main.css': 'app/styles/main.scss'
	            }
	        }
	    },
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: ['nodemon']
		}
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.registerTask('serve', ['sass', 'concurrent']);

};