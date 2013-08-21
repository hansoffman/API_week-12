module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
	  combine: {
		files: {
		  'css/style-min.css': ['style.css', 'path/to/two.css']
		}
	  }
	},
	  markdown: {
	    all: {
	      files: [
	        {
	          expand: true,
	          src: '*.md',
	          dest: 'docs/html/',
	          ext: '.html'
	        }
	      ]
	    }
	  }
	});

  	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-markdown');
	
	
  // Default task(s).
  	grunt.registerTask('default', ['cssmin', 'markdown']);
};