define([
    'jquery',
    'matchMedia',
    'jquery-ui-modules/widget',
    'accordion',
    'domReady!'
], function ($, mediaCheck) {
    'use strict';

    $.widget('elogic.footer', {
        options: {
            template: '',
            accordionOptions: {
                active: [0],
                collapsible: true,
                openedState: "active",
                multipleCollapsible: true,
                animate: {
                    easing: "easeOutCubic",
                    duration:"300"
                }
            }
        },

        _create: function () {
            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {},
                exit: function () {
                    $(this.options.template).accordion(this.options.accordionOptions);
                }.bind(this)
            })
        }
    });

    return $.elogic.footer;
});
