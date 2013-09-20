require.config({
	baseUrl: 'app',

	paths: {
		jquery: '../components/jquery/jquery.min',
		modernizr: '../components/modernizr/modernizr',
		underscore: '../components/underscore/underscore',
		backbone: '../components/backbone/backbone',
		codemirror: '../components/codemirror/lib/codemirror'
	},

	shim: {
		'underscore': {
			exports: '_'
		},

		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'codemirror': {
			exports: 'CodeMirror'
		}
	}
});

require(
	['jquery', 'modernizr', 'underscore', 'backbone',
		'models/file',
		'collections/files',
		'views/filecontentview', 'views/filesview',
		'router',
		'app'
	],
	function($, modernizr, _, Backbone,
		File,
		Files,
		FileContentView, FilesView,
		Router,
		app) {

	app.files = new Files({ path: '/' });
	app.filesView = new FilesView({ model: app.files, $parent: $('#root') });

	app.fileContentView = new FileContentView();
	app.router = new Router();

	app.once('initialLoad', function() {
		Backbone.history.start();
	});
});

