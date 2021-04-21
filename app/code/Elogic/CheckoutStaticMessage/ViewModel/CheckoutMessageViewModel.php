<?php

declare(strict_types=1);

namespace Elogic\CheckoutStaticMessage\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Checkout\Model\Session;
use Elogic\CheckoutStaticMessage\Helper\Data;

class CheckoutMessageViewModel implements ArgumentInterface
    {
    /**
     * @var Data
     */
    private $helperData;
    /**
     * @var Session
     */
    private $_session;

    public function __construct(
            Session $session,
            \Elogic\CheckoutStaticMessage\Helper\Data $helperData
        )
        {
            $this->helperData = $helperData;
            $this->_session = $session;
        }

        public function getMessage()
            {
                return $this->helperData->getGeneralConfig('display_text');
            }
        public function getItems()
            {
                $items = $this->_session->getQuote()->getItemsCount();
                return ($items > 0) ? true : false;
            }
    }


