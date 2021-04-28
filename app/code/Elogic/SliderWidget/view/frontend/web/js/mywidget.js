define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickSlider',
    'loader'
], function ($) {
    'use strict';

    $.widget('elogic.carousel', {
        options: {
            template: '',
            slickOptions: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">prev</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }

                ]
            }
        },
        _create: function () {
            var element = $(this.options.template);
            element.show();
            element.trigger('processStart');
            this._initSlick($(this.options.template));
        },

        _initSlick: function (element) {
            if (element.hasClass('slick-initialized')) {
                element.slick('unslick');
            }
            element.slick(this.options.slickOptions);
            element.trigger('processStop');
        }
    });
    return $.elogic.carousel;
});
