module.exports = function(grunt) {

    //  Grunt task configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'app/style/sass/sassconverted.css' : 'app/style/sass/sass.scss'
                }
            }
        },
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    //  Default Tasks
    grunt.registerTask ('default', ["uglify", "cssmin", "sass"]);
}