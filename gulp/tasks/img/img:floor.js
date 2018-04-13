"use strict";
//переносит фотографии из src в public
"use strict";
module.exports = function() {
  var images = [
        $.folders.src.pages + 'floor/images/**/*.JPG',
        $.folders.src.pages + 'floor/images/**/*.JPEG',
        $.folders.src.pages + 'floor/images/**/*.jpg',
        $.folders.src.pages + 'floor/images/**/*.jpeg',
        $.folders.src.pages + 'floor/images/**/*.png',
        $.folders.src.pages + 'floor/images/**/*.gif',
  ]
  $.gulp.task("img:floor", function() {
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
            image: $.folders.src.pages + "floor/data/watermark.png",
            resize: '200x300',
            gravity: 'SouthWest'
      }))
      .pipe($.gulp.dest($.folders.public + 'images'));
  });
};


