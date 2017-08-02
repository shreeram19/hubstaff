module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('compilestyle',['sass'],function(){
        console.log("Compiling the SCSS to CSS");
        grunt.task.run('sass');
        console.log("Done");
    });
    
    grunt.initConfig({
        exec:{
            installSass: {
                command: 'sudo gem install sass'
            }
        },
        concat : {
            dist: {
                src: ['app/styles/*'],
                dest: 'app/styles/bundle.scss'
            }
        },
        copy:{
            dist :{
                files:[{
                    expand: true,
                    cwd: 'app/',
                    src: '**/*.html',
                    dest:'build/'
                },
                {
                    expand: true,
                    cwd: 'app/',
                    src: '**/*.js',
                    dest:'build/'
                },
                {
                    expand: true,
                    cwd: 'app/',
                    src: 'images/**/*',
                    dest:'build/'
                },
                {
                    expand: true,
                    src: 'jquery.js',
                    dest:'build/'
                }
            ]
            }
        },
        clean:['app/styles/bundle.scss','app/all*','build'],
        sass:{
            dist:{
               files:[{
                   src:['app/styles/bundle.scss'],
                   dest:'build/all.css'
               }] 
            }
        },
        watch:{
            css:{
                files:['app/styles/*','app/**/*.js','app/**/*.html'],
                tasks:['clean','concat','compilestyle','copy']
            }
        }
    });
    
    
    grunt.registerTask('default',['exec','clean','concat','compilestyle','copy','watch']);
};