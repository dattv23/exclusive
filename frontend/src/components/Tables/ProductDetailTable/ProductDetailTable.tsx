'use client';

import React, { useState, ChangeEvent } from 'react';

import { Cart } from '@/types';

type ProductDetailTableProps = {
  data: Cart[];
};

const ProductDetailTable: React.FC<ProductDetailTableProps> = ({ data }) => {
  const [cart, setCart] = useState(data);

  const handleChangeQuantity = (
    id: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const quantity = parseInt(event.target.value);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: isNaN(quantity) ? 1 : quantity }
          : item,
      ),
    );
  };
  const item = cart[1];

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr className="border-b">
          <th className="px-6 py-3 text-left"></th>
        </tr>
      </thead>
      <tbody>
        {item && (
          <tr key={item.id} className="border-b">
            <input
              type="number"
              value={item.quantity.toString()}
              min={1}
              max={100}
              onChange={(e) => handleChangeQuantity(item.id, e)}
              className="w-16 rounded-md border p-2"
            />
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductDetailTable;
