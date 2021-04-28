define([
    'jquery',
    'matchMedia',
    'jquery-ui-modules/widget',
    'Magento_Ui/js/modal/modal',
    'jquery/jquery.cookie',
    'domReady!'
], function ($,mediaCheck){
    'use strict';

    $.widget('elogic.ModalSubscription', {
        options:{
            template: '',
            isCustomerSubscribed: false,
            modalOptions:{
                type: 'popup',
                responsive: true,
                modalClass: "home-subscription-popup",
                innerScroll: true
            }
        },

        _create: function (){
            mediaCheck({
                media: '(min-width: 1024px)',
                entry: function () {
                    var element = $(this.options.template);
                    if (!this.options.isCustomerSubscribed) {
                        this._isShowSubscriptionPopup();
                        if (!($.cookie('cancel_popup') ) || ($.cookie('cancel_popup') !== 'true')){
                            this._initModal(element);
                            $("body._has-modal").css('overflow', 'auto');
                        }
                    }
                }.bind(this),
                exit: function () {}
            })
        },
        _destroy: function (){
            $("#newsletter_popup_dont_show_again").off();
        },
        _initModal: function (element){
            element.modal(this.options.modalOptions);
        },
        _isShowSubscriptionPopup: function () {
            $("#newsletter_popup_dont_show_again").change(function() {
                this.checked ? $.cookie('cancel_popup', 'true', { path: '/', expires: 30 }) : $.cookie('cancel_popup', 'false');
            });
        }
    });

    return $.elogic.ModalSubscription;
});
