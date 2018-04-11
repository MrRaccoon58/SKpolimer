"use strict";
//переносит фотографии из src в public
"use strict";
module.exports = function() {
  var images = [
        $.folders.src.pages + 'floor/images/**/*.jpg',
        $.folders.src.pages + 'floor/images/**/*.jpeg',
        $.folders.src.pages + 'floor/images/**/*.png',
        $.folders.src.pages + 'floor/images/**/*.gif',
  ]
  $.gulp.task("img:floor", function() {
    return $.gulp
      .src(images, { base: './src/pages/'})
      .pipe($.p.imageResize({
        imageMagick: true,
        // height : 1100,
        width : 800,
        crop : false,
        quality: .8,
        upscale : false
      }))
      .pipe($.p.watermark({
            image: $.folders.src.pages + "floor/data/watermark.png",
            resize: '350x350',
            gravity: 'SouthWest'
      }))
      .pipe($.gulp.dest($.folders.public + 'images'));
  });
};


