const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const extReplace = require('gulp-ext-replace');
const clean = require('gulp-clean');

gulp.task('copy', function(){
  return gulp.src(['!../projects/**/prepros-6.config','!../projects/react/**/*','../projects/**/*'])
             .pipe(changed('./projects/'))
             .pipe(gulp.dest('./projects/'));
});

gulp.task('jpg', function(){
  gulp.src('./blog/assets/img/src/**/*.jpeg')
      .pipe(extReplace('.jpg'))
      .pipe(gulp.dest('./blog/assets/img/src'))
  return gulp.src('./blog/assets/img/src/**/*.jpeg')
      .pipe(clean({read: false}))
});

gulp.task('blog-imagemin', function(){
  gulp.src('./blog/assets/img/src/**/*')
    .pipe(imagemin([
      imageminJpegRecompress({
        loops:4,
        min:50,
        max:75,
        quality: "medium",
        progressive:true
      }),
      imagemin.optipng(),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('./blog/assets/img/dist'))
});
