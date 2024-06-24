import { getTranslations } from 'next-intl/server';
import React from 'react';
import { promises as fs } from 'fs';

import { Cart } from '@/types';
import { CheckOutForm } from '@/components';
import { ApplyCouponForm } from '@/components';
import { calculateDiscountedPrice } from '@/utils';
import { CheckOutTable } from '@/components/Tables';

const CheckOutPage: React.FC = async () => {
  const fileDataCart = await fs.readFile(
    process.cwd() + '/src/mocks/cart.json',
    'utf8',
  );
  const itemsList: Cart[] = JSON.parse(fileDataCart);
  const t = await getTranslations('CheckOutPage');
  const subtotal = itemsList.reduce(
    (pre, cur) =>
      pre +
      calculateDiscountedPrice(cur.product.price, cur.product.discount) *
        cur.quantity,
    0,
  );

  return (
    <main className="mx-auto mb-10 max-w-7xl p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('Billing Details')}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <CheckOutForm />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-md flex-col space-y-4">
            <CheckOutTable data={itemsList} />
            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p>{t('Subtotal')}</p>
                  <p>{`${subtotal}$`}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>{t('Shipping')}</p>
                  <p>FREE</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>{t('Total')}</p>
                  <p>{`${subtotal}$`}</p>
                </div>
              </div>
              <div className="mt-8">
                <div className="mt-5 space-y-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="payment-method"
                      className="h-4 w-4 border-zinc-300 text-red-600"
                    />
                    <label
                      htmlFor="bank"
                      className="ml-2 block text-sm text-zinc-900"
                    >
                      {t('Bank')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="payment-method"
                      className="h-4 w-4 border-zinc-300 text-red-600"
                      defaultChecked
                    />
                    <label
                      htmlFor="cash-on-delivery"
                      className="ml-2 block text-sm text-zinc-900"
                    >
                      {t('Cash on delivery')}
                    </label>
                  </div>
                </div>
              </div>
              <ApplyCouponForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckOutPage;
