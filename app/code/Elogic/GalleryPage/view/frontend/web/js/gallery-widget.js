define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickSlider',
], function ($) {
    'use strict';

    $.widget('elogic.carousel', {
        options: {
            template: '',
            slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:true,
                fade: true,
                cssEase: 'linear'
            }
        },
        _create: function () {
            var element = $(this.options.template);
            element.show();
            this._initSlick($(this.options.template));
        },

        _initSlick: function (element) {
            if (element.hasClass('slick-initialized')) {
                element.slick('unslick');
            }
            element.slick(this.options.slickOptions);
        }
    });
    return $.elogic.carousel;
});
