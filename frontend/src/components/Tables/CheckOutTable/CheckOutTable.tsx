'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { calculateDiscountedPrice } from '@/utils';
import { Cart } from '@/types';

type CheckOutTableProps = {
  data: Cart[];
};

const CheckOutTable: React.FC<CheckOutTableProps> = ({ data }) => {
  const [cartList] = useState(data);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <tbody>
                  {cartList.map((item) => (
                    <tr className="border-b" key={item.id}>
                      <td className=" flex items-center gap-5 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        <div className="relative">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            width={80}
                            height={80}
                            className="h-[80px] w-[80px]"
                          />
                        </div>
                        <p>{item.product.name}</p>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        {`${calculateDiscountedPrice(
                          item.product.price,
                          item.product.discount,
                        )}$`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutTable;
