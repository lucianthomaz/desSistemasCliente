"use strict";

//This model will represent all the data we need to send to populate our database. 
App.Models = App.Models || {};

(function () {
	App.Models.Bulk = Backbone.Model.extend({
		urlRoot: function() {
			return 'http://localhost:8080/';
		}
	});
})();