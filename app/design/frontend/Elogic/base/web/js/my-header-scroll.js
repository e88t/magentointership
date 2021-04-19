define([
    'jquery',
    'matchMedia',
    'jquery-ui-modules/widget',
    'mage/mage',
    'domReady!'
], function ($,mediaCheck) {
    'use strict';

    $.widget('elogic.sticky', {
        options: {},

        _create: function () {
            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    $(window).on('scroll',function(){
                        console.log('000');
                        if ($(this).scrollTop() > 120){
                            $('.page-header').addClass("_sticky");
                        }
                        else{
                            $('.page-header').removeClass("_sticky");
                        }
                    });
                },
                exit: function () {}
            })
        }
    });
    return $.elogic.sticky;
});
