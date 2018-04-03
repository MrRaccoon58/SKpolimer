"use strict";

module.exports = function() {
  $.gulp.task("sibkraspolimer:images", function() {
    var sibpoliceFtp = $.ftp.create({
      host: $.config.pass.sibpolic.host,
      user: $.config.pass.sibpolic.user,
      password: $.config.pass.sibpolic.password,
      parallel: $.config.pass.sibpolic.parallel,
      // log: $.config.pass.sibpolic.log,
    });

    //перечисляем папки и файлы которые хотим загрузить
    var globs = ["./src/main/images/**/*.jpg"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return $.gulp
      .src(globs, {
        base: "./src/main/images/", //"обрезаем" ненужный путь
        buffer: false })
      .pipe(sibpoliceFtp.newer("/sibkraspolimer.ru/images")) 
      .pipe(sibpoliceFtp.dest("/sibkraspolimer.ru/images"));
  });
};
