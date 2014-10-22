"use strict";

App.Views = App.Views || {};

(function() {
	App.Views.Schedule = Backbone.View.extend({
		el: '#jogapravencer',
		template: 'schedule_template',
		render: function () {

			$.get("scripts/templates/" + this.template + ".html", function(html) {

				var template = _.template(html);
				var template_populated = template({});

				$('#jogapravencer').html(template_populated);
			});
		}
	});
})();