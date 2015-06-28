'use strict';
module.exports = function(grunt) {
    
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    livereload: true,
                    hostname: 'localhost',
                    port: 9100,
                    base: {
                      path: 'app',
                      options: {
                        index: 'index.html'                        
                      }
                    },
                    open: true,
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: '**/*.*',
                tasks: [],
                options: {
                    spawn: false,
                }
            } 
        }
    }); 
   
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');    


    grunt.registerTask('dev', ['connect:server', 'watch']);   
};