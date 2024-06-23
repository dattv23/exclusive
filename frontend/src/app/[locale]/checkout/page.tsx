import dynamic from 'next/dynamic';
import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import LoadingPage from '@/containers/loading-page';
import { Locale } from '@/config';

const CheckOutPage = dynamic(() => import('@/containers/contact-page'), {
  loading: () => <LoadingPage />,
});

type CheckOutPageProps = {
  params: {
    locale: Locale;
  };
};

const CheckOut: React.FC<CheckOutPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  return <CheckOutPage />;
};

export default CheckOut;
