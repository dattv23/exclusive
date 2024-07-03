import { getTranslations } from 'next-intl/server';
import React from 'react';
import { promises as fs } from 'fs';

import { CheckOutForm } from '@/components';
import { CartItem } from '@/types';

const CheckOutPage: React.FC = async () => {
  const t = await getTranslations('CheckOutPage');
  const fileDataCart = await fs.readFile(
    process.cwd() + '/src/mocks/cart.json',
    'utf8',
  );
  const cart: CartItem[] = JSON.parse(fileDataCart);

  return (
    <main className="mx-10 mb-6 max-w-7xl p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('Billing Details')}</h1>
      <div>
        <CheckOutForm data={cart} />
      </div>
    </main>
  );
};

export default CheckOutPage;
