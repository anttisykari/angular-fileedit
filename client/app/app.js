// Globals, so long as they are needed

define(['underscore', 'backbone'], function(_, Backbone) {
	var app = {
		templates: {
			filename:
				"<a data-type='<%= type %>' href='#<%= path %>'>\n" +
				"    <%= name %><% if (type === 'file') { %>    (<%= length %> bytes) <% } %>\n" +
				"</a>"
		}
	};

	_.extend(app, Backbone.Events);

	return app;
});
