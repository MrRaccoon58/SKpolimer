"use strict";
//переносит фотографии из src в public
"use strict";
module.exports = function() {
  var images = [
        $.folders.src.pages + 'main/images/**/*.JPG',
        $.folders.src.pages + 'main/images/**/*.JPEG',
        $.folders.src.pages + 'main/images/**/*.jpg',
        $.folders.src.pages + 'main/images/**/*.jpeg',
        $.folders.src.pages + 'main/images/**/*.png',
        $.folders.src.pages + 'main/images/**/*.gif',
  ]
  $.gulp.task("img:main", function() {
    return $.gulp
      .src(images, { base: './src/pages/'})
      // .pipe($.p.imagemin())      
      .pipe($.p.imageResize({
        imageMagick: true,
        // height : 1100,
        width : 1000,
        crop : false,
        quality: .8,
        upscale : false
      }))
      .pipe($.p.watermark({
            image: $.folders.src.pages + "main/data/watermark.png",
            resize: '300x400',
            gravity: 'SouthWest'
      }))
      .pipe($.gulp.dest($.folders.public + 'images'));
  });
};


