# REQUIREMENTS
gulp = require('gulp')
$ = require('gulp-load-plugins')(lazy: true)
browserSync = require('browser-sync')
runSequence = require('run-sequence').use(gulp)

onError = (error) ->
	$.notify.onError('ERROR: <%- error.plugin %>') error
	$.util.beep()
	$.util.log '======= ERROR. ========\n'
	$.util.log error
	
	
requireDir = require('require-dir')

# Require all tasks in gulp/tasks, including subfolders
requireDir './tasks',
  recurse: true

gulp.task 'watch', ['browser-sync'], ->
	gulp.watch [ 'src/static/**/*' ], ['static']
	gulp.watch [ 'src/img/**/*' ], ['img']
	gulp.watch [ 'src/svg/**/*.svg' ], ['svg']
	gulp.watch [ 'src/styl/**/*.styl' ], ['styl']
	gulp.watch [ 'src/css/**/*.css' ], ['css']
	gulp.watch [ 'src/jade/**/*' ], ['jade']
	gulp.watch [ 'src/js/**/*' ], ['js']
	gulp.watch [ 'src/font/**/*' ], ['font']
	gulp.watch [ 'src/coffee/**/**/*.coffee' ], ['coffee']
	# gulp.watch [ 'src/jade/views/**/*.jade' ], ['templates']
	# gulp.watch [ 'build/components/**/*' ], ['bower']
	# gulp.watch [ 
	# 	'./build/styleguide/**/*', 
	# 	'./README.md',
	# 	'./app/css/**/*.css' 
	# ], ['styleguide']
	

gulp.task 'default', (cb) ->
	runSequence 'install',
		'coffee',
		'styl',
		'bower',
		'jade',
		'css',
		'js',
		# 'font',
		'static', 
		'img', 
		'svg',
		# 'templates',
		# 'watch',
		# 'styleguide'
		->

gulp.task 'browser-sync', ->
	browserSync 
		# proxy: 'localhost:3000'
		port: 8088
		open: false
		tunnel: false
		online: true
		logConnections: true
		injectChanges: true
		# snippetOptions:
		# 	rule:
		# 		match: /<browsersync>/i,
		# 		fn: (snippet, match) ->
		# 			return snippet + match;
		files: [ 
			'app/**/*'
			# 'docs/styleguide/**/*'
		]
		server: {
			baseDir: [
				'app'
				# 'docs'
			]
		}

gulp.task 'clear', (done) ->
  $.cache.clearAll done

gulp.task 'static', ->
	gulp.src(['src/static/**/*'], { base: 'src/static/'})
		.pipe $.plumber(errorHandler: onError)
		.pipe gulp.dest('app/')