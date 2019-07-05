/*
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function (grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: "smaller",
            width: 300,
            aspectRatio: false,
            separator: "-",
            suffix: "_1x", //For 1x displays.
            quality: 50 //50% of the original's quality.
          }, {
            name: "smaller",
            width: 300,
            aspectRatio: false,
            separator: "-",
            suffix: "_2x", //For 2x displays.
            quality: 70 //70%
          }, {
            name: "small",
            width: 500,
            aspectRatio: false,
            separator: "-",
            suffix: "_1x", //For 1x displays.
            quality: 50 //50% of the original's quality.
          }, {
            name: "small",
            width: 500,
            aspectRatio: false,
            separator: "-",
            suffix: "_2x", //For 2x displays.
            quality: 70 //70%
          }, {
            name: "medium",
            width: 600,
            separator: "-",
            suffix: "_1x", //For 1x displays.
            quality: 50 //50% of the original's quality.
          }, {
            name: "medium",
            width: 600,
            separator: "-",
            suffix: "_2x", //For 2x displays.
            quality: 70 //70%
          }, {
            name: "large",
            width: 900,
            separator: "-",
            suffix: "_1x", //For 1x displays.
            quality: 50 //50% of the original's quality.
          }, {
            name: "large",
            width: 900,
            separator: "-",
            suffix: "_2x", //For 2x displays.
            quality: 70 //70%
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,svg}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};