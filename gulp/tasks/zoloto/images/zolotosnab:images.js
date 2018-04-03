"use strict";

module.exports = function() {
  $.gulp.task("zolotosnab:images", function() {
    var zolotosnFtp = $.ftp.create({
      host: $.config.pass.zolotosn.host,
      user: $.config.pass.zolotosn.user,
      password: $.config.pass.zolotosn.password,
      parallel: $.config.pass.zolotosn.parallel,
      // log: $.config.pass.zolotosn.log,
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
