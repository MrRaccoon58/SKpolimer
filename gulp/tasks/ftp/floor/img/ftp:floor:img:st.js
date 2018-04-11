
"use strict";

module.exports = function() {
  $.gulp.task("ftp:floor:img:st", function() {
    var ftp = $.ftp.create({
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
      .pipe(ftp.newer("/www_Stupen-info.ru/images/stories")) 
      .pipe(ftp.dest("/www_Stupen-info.ru/images/stories"));
  });
};
