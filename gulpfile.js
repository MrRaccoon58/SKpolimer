"use strict";

global.$ = {
  package: require("./package.json"),
  pass: require("./gulp/pass.js"),
  folders: require("./gulp/folders.js"),
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
$.gulp.task('ftp:floor:img', //заливка изображений на все напольные сайты
  $.gulp.series(
        'ftp:floor:img:pr',
        'ftp:floor:img:sk',
        // 'ftp:floor:img:sksib', // Не актуально
        'ftp:floor:img:st',
  )
);

$.gulp.task('ftp:main:img', 
    $.gulp.series(
      'ftp:main:img:sk',
    )
);

$.gulp.task('img', 
    $.gulp.series(
      'img:floor',
      'img:gold',
      'img:main',
    )
);

