gulp = require('gulp')
$ = require('gulp-load-plugins')(lazy: true)

onError = (error) ->
	$.notify.onError('ERROR: <%- error.plugin %>') error
	$.util.beep()
	$.util.log '======= ERROR. ========\n'
	$.util.log error
  
gulp.task 'img', ->
   gulp.src([
    'src/img/**/*.jpg'
    'src/img/**/*.png'
    '!src/img/artnet/*'
    '!src/img/akc/*'
    '!src/img/cognizant/*'
    '!src/img/esquire/*'
    # '!src/img/projects/*'
  ])
  	.pipe $.plumber(errorHandler: onError)
    # .pipe $.cache($.imagemin())
  	# .pipe $.imagemin()
  	.pipe gulp.dest('app/img/')
    # .pipe gulp.dest( 'docs/styleguide/img' )
  return gulp.src([
    'src/img/**/*.gif'
  ])
    .pipe gulp.dest('app/img/')
    
gulp.task 'font', ->
  return gulp.src([
    'src/font/*.ttf',
    'src/font/*.otf'
  ])
  	.pipe $.plumber(errorHandler: onError)
  	.pipe $.cache($.cssfont64())
    .pipe $.concat('font.css')
  	.pipe gulp.dest('./app/css/')


gulp.task 'cson', ->
  gulp.src([ 'src/cson/*.cson' ])
    .pipe $.cson()
    .pipe gulp.dest('app')