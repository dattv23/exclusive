'use client';

import React, { ChangeEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { calculateDiscountedPrice } from '@/utils';
import { Cart } from '@/types';
import { Link } from '@/navigation';
import { Button } from '@/components/Button';
import { RemoveIcon } from '@/components/Icons';

type CartTableProps = {
  data: Cart[];
};

const CartTable: React.FC<CartTableProps> = ({ data }) => {
  const [cartList, setCartList] = useState(data);
  const t = useTranslations('CartTable');
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  const handleChangeQuantity = (
    id: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const quantity = parseInt(event.target.value);
    setCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.id === id
          ? { ...item, quantity: isNaN(quantity) ? 1 : quantity }
          : item,
      ),
    );
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      {t('Product')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      {t('Price')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      {t('Quantity')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      {t('Subtotal')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map((item) => (
                    <tr className="border-b" key={item.id}>
                      <td
                        className=" flex items-center gap-5 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                      >
                        <div className="relative">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            width={80}
                            height={80}
                            className="h-[80px] w-[80px]"
                          />
                          {hoveredItemId === item.id && (
                            <button className="absolute left-1 top-1">
                              <RemoveIcon />
                            </button>
                          )}
                        </div>
                        <p>{item.product.name}</p>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {`${calculateDiscountedPrice(
                          item.product.price,
                          item.product.discount,
                        )}$`}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        <input
                          type="number"
                          value={item.quantity}
                          placeholder={item.quantity.toString()}
                          min={1}
                          max={100}
                          onChange={(e) => handleChangeQuantity(item.id, e)}
                          className="flex w-16 items-center justify-center gap-4 rounded-md border p-2"
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {`${
                          calculateDiscountedPrice(
                            item.product.price,
                            item.product.discount,
                          ) * item.quantity
                        }$`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant={'secondary'} className="hover:text-primary">
          <Link href={'/products'}>{t('Return To Shop')}</Link>
        </Button>
        <Button>
          <Link href={'/cart'}>{t('Update Cart')}</Link>
        </Button>
      </div>
    </>
  );
};

export default CartTable;
