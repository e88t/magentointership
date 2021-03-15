define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickSlider'
], function ($) {
    'use strict';

    $.widget('elogic.carousel', {
        options: {
            slickOptions: {
                template: '',
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">prev</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                responsive: []
            }
        },
        _create: function () {
            this._initSlick($(this.options.slickOptions.template));
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
