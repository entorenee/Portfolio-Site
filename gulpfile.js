const gulp = require('gulp');
const changed = require('gulp-changed');

gulp.task('copy', function(){
  return gulp.src(['!../projects/**/prepros-6.config','../projects/**/*'])
             .pipe(changed('./projects/'))
             .pipe(gulp.dest('./projects/'));
});
