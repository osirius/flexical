window.ServersView = Backbone.View.extend({
    el: '[data-id="servers"]',
    initialize: function() {
        var self = this;
        this.template = Handlebars.compile(this.$('[data-template]').html());
        this.$servers = this.$('[data-list="servers"]');
    },
    update: function(data) {
        var self = this;
        _.each(data.servers, function(server) {
            var html = self.template(server);
            var $server = self.$servers.find('[data-id=' + server.id + ']');
            if ($server.length > 0) {
                $server.replaceWith(html);
            } else {
                self.$servers.append(html);
            }
        });
    },
});

window.InternalServersView = window.ServersView.extend({
    el: '[data-id="internal-servers"]',
});

window.ScotchView = Backbone.View.extend({
    el: '[data-id="tts"]',
    initialize: function() {
        var self = this;
        self.dueDate = moment().day(5).hours(16).minutes(0);

        var interval = 1000;

        setInterval(function(){
            self.$('[data-field="time"]').html(moment(self.dueDate).fromNow());
        }, interval);
    }
});
