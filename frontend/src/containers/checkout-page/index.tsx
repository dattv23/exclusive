import { useTranslations } from 'next-intl';
import React from 'react';

import { CheckOutForm } from '@/components';

interface CheckOutPageProps {}

const CheckOutPage: React.FC<CheckOutPageProps> = () => {
  const t = useTranslations('CheckOutPage');
  return (
    <main className=" mx-auto mb-10 max-w-7xl p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('Billing Details')}</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <CheckOutForm />
        </div>
        <div>
          <div className="space-y-4"></div>
        </div>
      </div>
    </main>
  );
};

export default CheckOutPage;
