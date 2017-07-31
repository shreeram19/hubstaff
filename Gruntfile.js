module.exports = function(grunt){
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
            ]
            }
        },
        clean:['app/all*','build'],
        sass:{
            dist:{
               files:[{
                   src:['app/styles/*'],
                   dest:'build/all.css'
               }] 
            }
        },
        watch:{
            css:{
                files:['app/styles/*','app/**/*.js','app/**/*.html'],
                tasks:['compilestyle','copy']
            }
        }
    });
    
    
    grunt.registerTask('default',['clean','compilestyle','copy','watch']);
};