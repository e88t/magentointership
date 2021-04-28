define([
    'jquery',
    'jquery-ui-modules/widget',
    'mage/mage',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.sticky', {
        options: {},

        _create: function () {
            $(window).on('scroll',function(){
                if ($(this).scrollTop() > 120){
                    $('.page-header').addClass("_sticky");
                }
                else{
                    $('.page-header').removeClass("_sticky");
                }
            });
        }
    });
    return $.elogic.sticky;
});
