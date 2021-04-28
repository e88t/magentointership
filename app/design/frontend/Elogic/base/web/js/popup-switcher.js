define([
    "jquery",
    "Magento_Ui/js/modal/modal",
    "domReady!"
], function ($){
    'use strict';

    $.widget('mage.switcherModal', {
        options:{
            template: '',
            modalOptions:{
                type: 'slide',
                modalClass: "sidebar-settings-popup",
                responsive: true,
                trigger: '.my-switcher-trigger',
                innerScroll: false,
                buttons: []
            }
        },

        _create: function (){
            var element = $(this.options.template);

            $('.my-switcher-trigger').on('click', function () {
                this._initModal(element);
            }.bind(this));
        },

        _initModal: function (element){
            element.modal(this.options.modalOptions);
        },
    });

    return $.mage.switcherModal;
});
