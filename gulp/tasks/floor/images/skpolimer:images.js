"use strict";

module.exports = function() {
  $.gulp.task("skpolimer:images", function() {
    var skpolimerFtp = $.ftp.create({
      host: $.pass.skpolimer.host,
      user: $.pass.skpolimer.user,
      password: $.pass.skpolimer.password,
      parallel: $.pass.skpolimer.parallel,
      log: $.pass.skpolimer.log,
    });

    //перечисляем папки и файлы которые хотим загрузить
    var globs = ["./src/floor/images/**/*.jpg"];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return $.gulp
      .src(globs, {
        base: "./src/floor/images/", //"обрезаем" ненужный путь
        buffer: false })
      .pipe(skpolimerFtp.newer("/skpolimer.ru/docs/images"))
      .pipe(skpolimerFtp.dest("/skpolimer.ru/docs/images"));
  });
};
