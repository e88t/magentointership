define([
    'jquery',
    'jquery-ui-modules/widget',
    'slickSlider'
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
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 700,
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
