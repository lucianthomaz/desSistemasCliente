"use strict";

window.App.init = function() {

	var router = new App.Routers.Router();

	var home_view = new App.Views.Home();
	var import_file_view = new App.Views.ImportFile();
	var schedule_view = new App.Views.Schedule();

	router.on('route:home', function(){
		home_view.render();
	});

	router.on('route:import_file', function() {
		import_file_view.render();
	});

	router.on('route:show_schedule', function() {
		schedule_view.render();
	});

	Backbone.history.start();
};

(function() {
	window.App.init();
})();