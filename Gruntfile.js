module.exports = function(grunt) {

    //  Grunt task configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
        *   Watch task only listens for updates on the .scss files
        *   Runs the SASS and CSSMIN tasks on event
        */
        watch: {
            scripts: {

                files: ['app/style/sass/*.scss'],
                tasks: ['sass','cssmin'],
                options: {

                    spawn: false,
                },
            },
        },

        /**
        *   Sass task converts .scss files into css files
        */
        sass: {
            dist: {
                files: {
                    'app/style/css/forms.css' : 'app/style/sass/forms.scss',
                    'app/style/css/matchdetails.css' : 'app/style/sass/matchdetails.scss',
                    'app/style/css/matches.css' : 'app/style/sass/matches.scss',
                    'app/style/css/style.css' : 'app/style/sass/style.scss'
                }
            }
        },

        /*
        *   cssmin task minifies converted scss/css files
        *   and places them to the public directory for production access
        */
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/style/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/stylesheets',
                    ext: '.min.css'
                }]
            }
        }
    });

    //  Tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    //  Default Tasks
    grunt.registerTask ('default', ["sass", "cssmin"]);
}