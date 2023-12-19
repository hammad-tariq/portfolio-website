window.wp = window.wp || {};
(function($) {
    var settings = typeof _wpUtilSettings === 'undefined' ? {} : _wpUtilSettings;
    wp.template = _.memoize(function(id) {
        var compiled, options = {
            evaluate: /<#([\s\S]+?)#>/g,
            interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
            escape: /\{\{([^\}]+?)\}\}(?!\})/g,
            variable: 'data'
        };
        return function(data) {
            if (!document.getElementById('tmpl-' + id)) {
                throw new Error('Template not found: ' + '#tmpl-' + id);
            }
            compiled = compiled || _.template($('#tmpl-' + id).html(), options);
            return compiled(data);
        };
    });
    wp.ajax = {
        settings: settings.ajax || {},
        post: function(action, data) {
            return wp.ajax.send({
                data: _.isObject(action) ? action : _.extend(data || {}, {
                    action: action
                })
            });
        },
        send: function(action, options) {
            var promise, deferred;
            if (_.isObject(action)) {
                options = action;
            } else {
                options = options || {};
                options.data = _.extend(options.data || {}, {
                    action: action
                });
            }
            options = _.defaults(options || {}, {
                type: 'POST',
                url: wp.ajax.settings.url,
                context: this
            });
            deferred = $.Deferred(function(deferred) {
                if (options.success) {
                    deferred.done(options.success);
                }
                if (options.error) {
                    deferred.fail(options.error);
                }
                delete options.success;
                delete options.error;
                deferred.jqXHR = $.ajax(options).done(function(response) {
                    if (response === '1' || response === 1) {
                        response = {
                            success: true
                        };
                    }
                    if (_.isObject(response) && !_.isUndefined(response.success)) {
                        var context = this;
                        deferred.done(function() {
                            if (action && action.data && 'query-attachments' === action.data.action && deferred.jqXHR.hasOwnProperty('getResponseHeader') && deferred.jqXHR.getResponseHeader('X-WP-Total')) {
                                context.totalAttachments = parseInt(deferred.jqXHR.getResponseHeader('X-WP-Total'), 10);
                            } else {
                                context.totalAttachments = 0;
                            }
                        });
                        deferred[response.success ? 'resolveWith' : 'rejectWith'](this, [response.data]);
                    } else {
                        deferred.rejectWith(this, [response]);
                    }
                }).fail(function() {
                    deferred.rejectWith(this, arguments);
                });
            });
            promise = deferred.promise();
            promise.abort = function() {
                deferred.jqXHR.abort();
                return this;
            };
            return promise;
        }
    };
}(jQuery));