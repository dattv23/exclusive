import dynamic from 'next/dynamic';
import React from 'react';

const CartPage = dynamic(() => import('@/containers/cart-page'));

const Cart: React.FC = () => {
  return <CartPage />;
};

export default Cart;
