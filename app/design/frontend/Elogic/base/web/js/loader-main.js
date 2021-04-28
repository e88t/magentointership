define([
    'jquery',
    'loader',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.loader', {
        options: {},

        _create: function () {
            var body = $('body');
            // body.trigger('processStart');
            $(window).on('load', function () {
                body.trigger('processStop');
            })
        }
    });
    return $.elogic.loader;
});
