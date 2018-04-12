"use strict";
//переносит фотографии из src в public
"use strict";
module.exports = function() {
  var images = [
        $.folders.src.pages + 'gold/images/**/*.JPG',
        $.folders.src.pages + 'gold/images/**/*.JPEG',
        $.folders.src.pages + 'gold/images/**/*.jpg',
        $.folders.src.pages + 'gold/images/**/*.jpeg',
        $.folders.src.pages + 'gold/images/**/*.png',
        $.folders.src.pages + 'gold/images/**/*.gif',
  ]
  $.gulp.task("img:gold", function() {
    return $.gulp
      .src(images, { base: './src/pages/'})
      .pipe($.p.imagemin())      
      .pipe($.p.imageResize({
        imageMagick: true,
        // height : 1100,
        width : 1000,
        crop : false,
        quality: .8,
        upscale : false
      }))
      .pipe($.p.watermark({
            image: $.folders.src.pages + "gold/data/watermark.png",
            resize: '300x400',
            gravity: 'SouthWest'
      }))
      .pipe($.gulp.dest($.folders.public + 'images'));
  });
};


