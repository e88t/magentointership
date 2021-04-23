define([
    'jquery',
    'jQueryUi',
    'domReady!'
], function ($){
    'use strict';

    $.widget('elogic.selectizeCategorySorter', {
        options:{
            template: '',
            selectOptions: {
                icons: { button: "ui-icon-caret-1-s" },
                position: { my : "left-95", at: "top+100" }
            }
        },
        _create: function (){
            var element = $(this.options.template);
            element.selectmenu(
                this.options.selectOptions,
                {
                    change: function (event, ui) {
                        $(this).trigger('change');
                    }
                }
            );
        }
    });
    return $.elogic.selectizeCategorySorter;
});
