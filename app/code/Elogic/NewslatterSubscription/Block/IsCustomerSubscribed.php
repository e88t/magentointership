<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Elogic\NewslatterSubscription\Block;


use Magento\Customer\Model\Session;
use Magento\Framework\View\Element\Template;

class IsCustomerSubscribed extends \Magento\Framework\View\Element\Template {

    /**
     * @var \Magento\Newsletter\Model\Subscriber
     */
    private $_subscriber;

    /**
     * @var Session
     */
    private $_customerSession;

    public function __construct(
        Session $customerSession,
        \Magento\Newsletter\Model\Subscriber $subscriber,
        Template\Context $context,
        array $data = []
    )
    {
        parent::__construct(
            $context,
            $data
        );
        $this->_customerSession = $customerSession;
        $this->_subscriber = $subscriber;
    }

    public function isSubscribed (): bool
    {
        $checkSubscriber = $this->_subscriber->loadByCustomerId($this->_customerSession->getCustomer()->getId());

        if ($checkSubscriber->isSubscribed()) {
            return true;
        } else {
            return false;
        }
    }
}
