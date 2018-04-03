"use strict";

module.exports = function() {
  $.gulp.task("skpolimer:images", function() {
    var skpolimerFtp = $.ftp.create({
      host: "ftp.skpolimer.nichost.ru",
      user: "skpolimer_ftp",
      password: "x4x4u3ey",
      parallel: 2,
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
      .pipe(skpolimerFtp.newer("/skpolimer.ru/docs/images"))
      .pipe(skpolimerFtp.dest("/skpolimer.ru/docs/images"));
  });
};
