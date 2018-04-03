"use strict";

global.$ = {
  package: require("./package.json"),
  config: require("./gulp/config.js"),
  path: {
    task: require("./gulp/path/tasks.js")
  },
  gulp: require("gulp"),
  del: require("del"),
  ftp: require( 'vinyl-ftp' ),
  browserSync: require("browser-sync"),
  p: require("gulp-load-plugins")()
};
$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('floor:images:upload', //заливка изображений на все напольные сайты
  $.gulp.series(
        'prostupInfo:images',
        'stupenInfo:images',
        'skpolimer:images',
        'skpolimerSibkraspolimer:images',
  )
);