const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

gulp.task('copy', function(){
  return gulp.src(['!../projects/**/prepros-6.config','../projects/**/*'])
             .pipe(changed('./projects/'))
             .pipe(gulp.dest('./projects/'));
});

gulp.task('imagemin', function(){
  gulp.src('./assets/img/twitch-viewer/src/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./assets/img/twitch-viewer/dist'))
});
