"use strict";

App.Views = App.Views || {};

(function() {
	App.Views.ImportFile = Backbone.View.extend({
		el: '#jogapravencer',
		template: 'import_file_template',
		render: function () {

			$.get("scripts/templates/" + this.template + ".html", function(html){

				var template = _.template(html);
				var template_populated = template({});

				$('#jogapravencer').html(template_populated);
			});
		},

		events: {
			'onload #files': 'readFile'
		},

		readFile: function(ev, params) {
			console.log(params);
		}
	});
})();