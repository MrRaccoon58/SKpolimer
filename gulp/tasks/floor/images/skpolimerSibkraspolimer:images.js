"use strict";

module.exports = function() {
  $.gulp.task("pass.ftp", function() {
    var sibpoliceFtp = $.ftp.create({
      host: $.pass.ftp.sibpolic.host,
      user: $.pass.ftp.sibpolic.user,
      password: $.pass.ftp.sibpolic.password,
      parallel: $.pass.ftp.sibpolic.parallel,
      log: $.pass.ftp.sibpolic.log,
    });

    //перечисляем папки и файлы которые хотим загрузить
    var globs = ["./src/floor/images/**/*.jpg"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return $.gulp
      .src(globs, {
        base: "./src/floor/images/", //"обрезаем" ненужный путь
        buffer: false })
      .pipe(sibpoliceFtp.newer("/skpolimer-new/images")) 
      .pipe(sibpoliceFtp.dest("/skpolimer-new/images"));
  });
};
