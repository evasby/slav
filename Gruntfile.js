module.exports = function(grunt) {

    // 1. ��� ��������� ��������� �����
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*concat: {
            // 2. ��������� ��� ����������� ������ ��������� ���
            dist: {
                src: [
                    'js/libs/*.js', // ��� JS � ����� libs
                    'js/script.js'  // ���������� ����
                ],
                dest: 'js/build/production.js',
            }
        },*/
        
        /*uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },*/
        
        /*imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**//**.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },*/
        
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/all.css': 'sass/all.scss',
                    'css/all-old-ie.css': 'sass/all-old-ie.scss',
                    /*'C:/OpenServer/domains/alvista-d/sites/all/themes/alvista/css/all.css': 'sass/all.scss',
                    'C:/OpenServer/domains/alvista-d/sites/all/themes/alvista/css/all-old-ie.css': 'sass/all-old-ie.scss'*/
                }
            }
        },

        ftp_upload: {
            build: {
                auth: {
                    host: 'webformat.by',
                    port: 21,
                    authKey: 'key1'
                },
                //src: ['css/all.css', 'css/all-old-ie.css', 'css/all.css.map', 'css/all-old-ie.css.map'],
                src: ['css/all.css', 'css/all-old-ie.css'],
                //dest: 'www/slav.webformat.by/sites/all/themes/slav/css',
                dest: 'www/slav.webformat.by/css',
                exclusions: ['css/**/.DS_Store', 'css/**/Thumbs.db', 'dist/tmp']
            }
        },
        
        /*compass: {                  // Task
          dist: {                   // Target
            options: {              // Target options
              sassDir: 'sass',
              cssDir: 'css'
            }
          }
        },*/
        
        watch: {
            css: {
                files: ['sass/*.scss'],
                //tasks: ['sass', 'ftp_upload'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            /*scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                }
            }*/
        }

    });

    // 3. ��� �� ��������� Grunt, ��� ����� ������������ ���� ������
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-upload');

    // 4. ���������, ����� ������ �����������, ����� �� ������ �grunt� � ���������
    //grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);
    grunt.registerTask('default', ['sass', 'watch']);

};