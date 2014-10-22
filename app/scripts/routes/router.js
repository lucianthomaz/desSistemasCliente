"user strict";

App.Routers = App.Routers || {};

(function (){
	App.Routers.Router = Backbone.Router.extend({
		routes: {
			'import': 'import_file',
			'schedule': 'show_schedule',
			'':'home'
		}
	});
})();