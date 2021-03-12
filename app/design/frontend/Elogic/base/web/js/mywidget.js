define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickSlider'
], function ($) {
    'use strict';

    $.widget('elogic.carousel', {
        options: {
            slickOptions: {
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
            if (this.element.hasClass('slick-initialized')) {
                this.element.slick('unslick');
            }
            this.element.slick(this.options.slickOptions);
        }
    });
    return $.elogic.carousel;
});
