import dynamic from 'next/dynamic';
import React from 'react';

const CheckoutPage = dynamic(() => import('@/containers/checkout-page'));

const Checkout: React.FC = () => {
  return <CheckoutPage />;
};

export default Checkout;
