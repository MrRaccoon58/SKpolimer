
"use strict";

module.exports = function() {
  $.gulp.task("stupenInfo:images", function() {
    var zolotosnFtp = $.ftp.create({
      host: "yutex25.yutex.ru",
      user: "zolotosn",
      password: "lNxmCroyGZIo_8543",
      parallel: 1,
      log: $.p.util.log
    });

    //перечисляем папки и файлы которые хотим загрузить
    var globs = ["./src/floor/images/**/*.jpg"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return $.gulp
      .src(globs, {
        base: "./src/floor/images/", //"обрезаем" ненужный путь
        buffer: false })
      .pipe(zolotosnFtp.newer("/www_Stupen-info.ru/images/stories")) 
      .pipe(zolotosnFtp.dest("/www_Stupen-info.ru/images/stories"));
  });
};
