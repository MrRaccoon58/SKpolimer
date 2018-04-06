"use strict";

global.$ = {
  package: require("./package.json"),
  pass: require("./gulp/pass.js"),
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
// Если стоит пометка не актуально то значит картинки загружаются на сервер через плагин и пока не понятно как реализовать правильно
$.gulp.task('floor:images:upload', //заливка изображений на все напольные сайты
  $.gulp.series(
        'prostupInfo:images',
        'stupenInfo:images',
        'skpolimer:images',
        // 'skpolimerSibkraspolimer:images', // не актуально
  )
);

$.gulp.task('main:images:upload', 
    $.gulp.series(
      'sibkraspolimer:images',
    )
);