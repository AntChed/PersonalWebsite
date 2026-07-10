module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  
  // Configuration de Grunt
  grunt.initConfig({
	  
	concat: {
      options: {
        separator: ';', // permet d'ajouter un point-virgule entre chaque fichier concaténé.
      },
      dist: {
        src: ['assets/css/owl.theme.css', 'assets/css/owl.carousel.css', 'assets/css/magnific-popup.css', 'assets/css/simpletextrotator.css', 'assets/css/animate.css'], // la source
        dest: 'assets/css/built.css' // la destination finale
      }
    },
	uglify: {
		options: {
			separator: ';'
		},
		dist: {
			//src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
			//dest: 'dist/built.js'
			files: {
			  'assets/js/jquery.waypoints.min.js': ['assets/js/jquery.waypoints.js'],
			  'assets/js/jquery.countTo.min.js': ['assets/js/jquery.countTo.js'],
			  'assets/js/smoothscroll.min.js': ['assets/js/smoothscroll.js'],
			  'assets/js/jquery.fitvids.min.js': ['assets/js/jquery.fitvids.js'],
			  'assets/js/custom.min.js': ['assets/js/custom.js']
			}
		},
		compile:{
			src: ['assets/js/jquery-1.11.0.min.js', 'assets/bootstrap/js/bootstrap.min.js', 'assets/js/jquery.backstretch.min.js', 'assets/js/owl.carousel.min.js', 'assets/js/jquery.magnific-popup.min.js', 'assets/js/jquery.simple-text-rotator.min.js', 'assets/js/jquery.waypoints.min.js', 'assets/js/jquery.countTo.min.js', 'assets/js/wow.min.js', 'assets/js/smoothscroll.min.js', 'assets/js/jquery.fitvids.min.js', 'assets/js/custom.min.js' ],
			dest: 'assets/js/built.js'
		}
	},
	cssmin: {
      options: {
		shorthandCompacting: false,
		roundingPrecision: -1
	  },
	  target: {
		files: {
		  'assets/css/owl.theme.min.css': ['assets/css/owl.theme.css'],
		  'assets/css/owl.carousel.min.css': ['assets/css/owl.carousel.css'],
		  'assets/css/magnific-popup.min.css': ['assets/css/magnific-popup.css'],
		  'assets/css/simpletextrotator.min.css': ['assets/css/simpletextrotator.css'],
		  'assets/css/animate.min.css': ['assets/css/animate.css'],
		  'assets/css/style.min.css': ['assets/css/style.css'],
		  
		}
	  },
	  compile: {
		files: {
		  'assets/css/built.css': ['assets/bootstrap/css/bootstrap.min.css', 'assets/css/owl.theme.min.css', 'assets/css/owl.carousel.min.css', 'assets/css/magnific-popup.min.css', 'assets/css/simpletextrotator.min.css', 'assets/css/animate.min.css' ],
		}  
	  }
	},
	htmlmin: {                                     // Task 
		dist: {                                      // Target 
		  options: {                                 // Target options 
			removeComments: true,
			collapseWhitespace: true
		  },
		  files: {                                   // Dictionary of files 
			'index.html': 'index_non_minify_gb.html',     // 'destination': 'source' 
			'index_fr.html': 'index_non_minify_fr.html'     // 'destination': 'source'
		  }
		},
		dev: {                                      // Another target 
		  files: {
			'index.html': 'index.html'
		  }
		}
	}
	  
	  
	  
  })

  // Définition des tâches Grunt
  grunt.registerTask('default', ['concat:dist'])

}