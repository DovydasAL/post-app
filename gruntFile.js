module.exports = function(grunt) {

    grunt.initConfig({
        /*
        ====================
        JS
        ====================
        */
        // Check JS for errors
        jshint: {
            all: ['app/js/**/*.js']
        },

        // Minify JS
        uglify: {
            build: {
                files: {
                    'dist/js/app.min.js': ['app/js/**/*.js', 'app/js/*.js']
                }
            }
        },

        /*
        ====================
        CSS
        ====================
        */
        // Process less CSS
        less: {
            build: {
                files: {
                    'dist/css/style.css': 'app/css/style.less'
                }
            }
        },

        // Minify less file
        cssmin: {
            build: {
                files: {
                    'dist/css/style.min.css': 'dist/css/style.css'
                }
            }
        },

        /*
        ====================
        Other
        ====================
        */

        copy: {
            main: {
                expand: true,
                flatten: true,
                src: ['app/views/*'],
                dest: 'dist/views',
                filter: 'isFile'
            },
        },

        // Watch CSS/JS files
        watch: {
            css: {
                files: ['app/css/**/*.less'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['app/js/**/*.js'],
                tasks: ['jshint', 'uglify']
            },
            html: {
                files: ['app/views/**/*.html'],
                tasks: ['copy']
            }
        },

        // Watch node for changes
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        // Run/Watch nodemon simultaneously
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'uglify', 'copy', 'concurrent']);

};