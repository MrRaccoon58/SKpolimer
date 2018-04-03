"use strict";

module.exports = function() {
  $.gulp.task("prostupInfo:images", function() {
    var zolotosnFtp = $.ftp.create({
      host: $.pass.ftp.zolotosn.host,
      user: $.pass.ftp.zolotosn.user,
      password: $.pass.ftp.zolotosn.password,
      parallel: $.pass.ftp.zolotosn.parallel,
      log: $.pass.ftp.zolotosn.log,
    });

    //перечисляем папки и файлы которые хотим загрузить
    var globs = ["./src/floor/images/**/*.jpg"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return $.gulp
      .src(globs, {
        base: "./src/floor/images/", //"обрезаем" ненужный путь
        buffer: false })
      .pipe(zolotosnFtp.newer("/www_Prostup-info.ru/img")) 
      .pipe(zolotosnFtp.dest("/www_Prostup-info.ru/img"));
  });
};
