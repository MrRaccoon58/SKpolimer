"use strict";

module.exports = function() {
  $.gulp.task("zolotosnab:images", function() {
    var zolotosnFtp = $.ftp.create({
      host: $.pass.ftp.zolotosn.host,
      user: $.pass.ftp.zolotosn.user,
      password: $.pass.ftp.zolotosn.password,
      parallel: $.pass.ftp.zolotosn.parallel,
      // log: $.pass.ftp.zolotosn.log,
    });

    //перечисляем папки и файлы которые хотим загрузить
    var globs = ["./src/zoloto/images/**/*.jpg"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return $.gulp
      .src(globs, {
        base: "./src/zoloto/images/", //"обрезаем" ненужный путь
        buffer: false })
      .pipe(zolotosnFtp.newer("/public_html/images/stories")) 
      .pipe(zolotosnFtp.dest("/public_html/images/stories"));
  });
};
