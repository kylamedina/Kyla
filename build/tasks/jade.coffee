gulp = require('gulp')
$ = require('gulp-load-plugins')(lazy: true)
browserSync = require('browser-sync')

onError = (error) ->
	$.notify.onError('ERROR: <%- error.plugin %>') error
	$.util.beep()
	$.util.log '======= ERROR. ========\n'
	$.util.log error

gulp.task 'pug-watch', ->
	return gulp.src(['src/pug/**/*.pug','!src/pug/views/**/*.pug','!src/pug/includes/**/*.pug','!src/pug/modules/**/*.pug','!src/pug/layouts/**/*.pug'])
		.pipe $.plumber(errorHandler: onError)
		.pipe $.pug()
		.pipe gulp.dest('app')

gulp.task('pug', ['pug-watch'], browserSync.reload);

# gulp.task 'templates', ->
# 	# filter = $.filter(['*.pug'])
# 	return gulp.src([
# 		'src/pug/views/**/*.pug'
# 	])
# 		.pipe $.plumber(errorHandler: onError)
# 		.pipe $.accord 'pug'
# 		.pipe $.emberTemplates
# 			type: 'browser'
# 			compiler: require('/Users/Kyla/Sites/kyla/build/components/ember/ember-template-compiler.js')
# 			isHTMLBars: true
# 		.pipe $.concat 'templates.js'
# 		.pipe gulp.dest 'app/js'