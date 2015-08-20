gulp = require('gulp')
$ = require('gulp-load-plugins')(lazy: true)

onError = (error) ->
	$.notify.onError('ERROR: <%- error.plugin %>') error
	$.util.beep()
	$.util.log '======= ERROR. ========\n'
	$.util.log error

gulp.task 'install', ->
	return gulp.src(['./bower.json','./package.json'])
		.pipe $.install()

gulp.task 'js', ->
	return gulp.src(['./src/js/*.js'])
		.pipe($.order([
			'**/jquery-2.1.4.min.js'
			'**/jquery.pace.js'
			'**/jquery.easing.1.3.js'
			'**/jquery.easing.compatibility.js'
			'**/tweenMax.js'
			'**/jquery.owl.carousel.js'
			'**/jquery.wolf.min.js'
		]))
		.pipe($.accord('uglify-js', {
			beautify: false
			mangle: false
		}))
		.pipe $.concat 'app.js'
		.pipe gulp.dest 'app/js'

gulp.task 'bower', ->
	jsFilter = $.filter(['**/*.js'])
	cssFilter = $.filter(['**/*.css'])
	files = require('main-bower-files')();
	#console.log 'Bower Main Files: ' + files
	gulp.src(files)
		.pipe $.plumber(errorHandler: onError)
		.pipe $.filter(['**/*.js'])
		.pipe($.order([
			'**/jquery.min.js'
			'**/ember.debug.js'
			'**/ember-data.*'
		]))
		.pipe $.concat 'vendor.js'
		# .pipe($.accord('uglify-js', {
		# 	beautify: true
		# 	mangle: false
		# }))
		.pipe gulp.dest 'app/js'
	gulp.src(files)
		.pipe $.plumber(errorHandler: onError)
		.pipe $.filter(['**/*.css'])
		.pipe $.concat 'vendor.css'
		# .pipe $.cssmin
		.pipe gulp.dest 'app/css'
