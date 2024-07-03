'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { Locale } from '@/config';
import { CartItem, mapCartToMappedCartItem } from '@/types';
import { Link, useRouter } from '@/navigation';
import { useCartStore } from '@/store';
import { Button } from '@/components/Button';
import { RemoveIcon } from '@/components/Icons';
import { calculateDiscountedPrice, convertPriceByLocale } from '@/lib/utils';
import toast from 'react-hot-toast';

type CartTableProps = {
  data: CartItem[];
};

const CartTable: React.FC<CartTableProps> = ({ data }) => {
  const { cart, update } = useCartStore();
  const t = useTranslations('CartTable');
  const params = useParams();
  const router = useRouter();

  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      update(data);
    }
  }, []);

  const handleChangeQuantity = (
    id: string,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const quantity = parseInt(event.target.value);
    update(
      cart.map((item) =>
        item.product.id === id
          ? { ...item, quantity: isNaN(quantity) ? 1 : quantity }
          : item,
      ),
    );
  };

  const handleUpdateCart = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        router.push('/auth/sign-in');
      }
      const res = await fetch(`https://exclusive-brbv.onrender.com`, {
        method: 'PUT',
        body: JSON.stringify(mapCartToMappedCartItem(cart)),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          accept: '*/*',
        },
      });
      const data = await res.json();
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      toast.error(t('Update cart failed'));
    }
  };

  const cols = [
    { name: t('Product') },
    { name: t('Product') },
    { name: t('Quantity') },
    { name: t('Subtotal') },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    {cols.map((col, id) => (
                      <th
                        key={id}
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        {col.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr className="border-b" key={item.product.id}>
                      <td
                        className=" flex items-center gap-5 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
                        onMouseEnter={() => setHoveredItemId(item.product.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                      >
                        <div className="relative">
                          <Image
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            width={80}
                            height={80}
                            className="h-[80px] w-[80px]"
                          />
                          {hoveredItemId === item.product.id && (
                            <button className="absolute left-1 top-1">
                              <RemoveIcon />
                            </button>
                          )}
                        </div>
                        <p>{item.product.name}</p>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {convertPriceByLocale(
                          calculateDiscountedPrice(
                            item.product.regularPrice,
                            item.product?.discount ?? 0,
                          ),
                          params.locale as Locale,
                        )}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        <input
                          type="number"
                          value={item.quantity}
                          placeholder={item.quantity.toString()}
                          min={1}
                          max={100}
                          onChange={(e) =>
                            handleChangeQuantity(item.product.id, e)
                          }
                          className="flex w-16 items-center justify-center gap-4 rounded-md border p-2"
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {convertPriceByLocale(
                          calculateDiscountedPrice(
                            item.product.regularPrice,
                            item.product?.discount ?? 0,
                          ) * item.quantity,
                          params.locale as Locale,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <Button variant={'secondary'} className="hover:text-primary">
          <Link href={'/products'}>{t('Return To Shop')}</Link>
        </Button>
        <Button onClick={handleUpdateCart}>
          <Link href={'/cart'}>{t('Update Cart')}</Link>
        </Button>
      </div>
    </>
  );
};

export default CartTable;
