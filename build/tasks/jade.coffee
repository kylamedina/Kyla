gulp = require('gulp')
$ = require('gulp-load-plugins')(lazy: true)
browserSync = require('browser-sync')

onError = (error) ->
	$.notify.onError('ERROR: <%- error.plugin %>') error
	$.util.beep()
	$.util.log '======= ERROR. ========\n'
	$.util.log error

gulp.task 'jade-watch', ->
	return gulp.src(['src/jade/**/*.jade','!src/jade/views/**/*.jade','!src/jade/includes/**/*.jade','!src/jade/modules/**/*.jade'])
		.pipe $.plumber(errorHandler: onError)
		.pipe $.accord 'jade',
			pretty: true
		.pipe gulp.dest('app')

gulp.task('jade', ['jade-watch'], browserSync.reload);

# gulp.task 'templates', ->
# 	# filter = $.filter(['*.jade'])
# 	return gulp.src([
# 		'src/jade/views/**/*.jade'
# 	])
# 		.pipe $.plumber(errorHandler: onError)
# 		.pipe $.accord 'jade'
# 		.pipe $.emberTemplates
# 			type: 'browser'
# 			compiler: require('/Users/Kyla/Sites/kyla/build/components/ember/ember-template-compiler.js')
# 			isHTMLBars: true
# 		.pipe $.concat 'templates.js'
# 		.pipe gulp.dest 'app/js'