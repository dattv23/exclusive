import dynamic from 'next/dynamic';
import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import LoadingPage from '@/containers/product-details-page';
import { Locale } from '@/config';

const ProductDetailPage = dynamic(
  () => import('@/containers/product-details-page'),
  {
    loading: () => <LoadingPage />,
  },
);

type ProductDetailPageProps = {
  params: {
    locale: Locale;
  };
};

const ProductDetail: React.FC<ProductDetailPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  return <ProductDetailPage />;
};

export default ProductDetail;
