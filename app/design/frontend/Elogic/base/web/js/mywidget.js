define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickSlider'
    ], function ($) {
    'use strict';

        $.widget('elogic.carousel', {
            options:{
                slickOptions: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: <span> prev</span>,
                    nextArrow: <span> next</span>,
                    responsive: [
                    ]
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
