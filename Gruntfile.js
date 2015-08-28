module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                  options: {
                      compress: true
                    , yuicompress: true
                    , optimization: 2
                }
                , files: {
                    'dist/cleancss.min.css': 'less/main.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};
