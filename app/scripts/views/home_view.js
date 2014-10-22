"use strict";

App.Views = App.Views || {};

(function() {
	App.Views.Home = Backbone.View.extend({
		el: '#jogapravencer',
		template: 'home_template',
		
		render: function () {

			$.get("scripts/templates/" + this.template + ".html", function(html) {

				var template = _.template(html);
				var template_populated = template({});

				$('#jogapravencer').html(template_populated);
			});
		}
	});
})();