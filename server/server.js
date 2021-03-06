/**
 * Minimal static file web server to test drive the site
 */
var express = require('express'),
	http = require('http'),
	path = require('path'),
	fileServer = require('./fileServer');

var app = express(),
	mode = app.get('env'),
	sourcePath = path.join(__dirname, '..', 'client');
	buildPath = path.join(__dirname,'..',
		(mode === 'production') ? 'dist' : 'staging');

app.configure(function() {
	app.set('port', process.env.PORT || 8080);
	app.use(express.logger('dev'));
	// First serve the files from build path, in debug mode fallback to source path
	app.use(express.static(buildPath));
	if (mode !== 'production') {
		app.use(express.static(sourcePath));
	}
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

fileServer(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port', app.get('port'), 'serving files from', buildPath);
});
