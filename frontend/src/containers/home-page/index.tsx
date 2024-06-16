import dynamic from 'next/dynamic';
import React from 'react';
import { promises as fs } from 'fs';

import { Product } from '@/types';

const BannerSection = dynamic(
  () => import('@/containers/home-page/banner-section'),
);
const FlashSalesSection = dynamic(
  () => import('@/containers/home-page/flash-sales-section'),
  { ssr: false },
);
const CategoriesSection = dynamic(
  () => import('@/containers/home-page/categories-section'),
);
const BestSellerSection = dynamic(
  () => import('@/containers/home-page/best-seller-section'),
);
const AdsSection = dynamic(() => import('@/containers/home-page/ads-section'));
const OurProductSection = dynamic(
  () => import('@/containers/home-page/our-product-section'),
);
const NewArrivalSection = dynamic(
  () => import('@/containers/home-page/new-arrival-section'),
);
const ServicesSection = dynamic(
  () => import('@/containers/home-page/services-section'),
);

const HomePage: React.FC = async () => {
  const fileDataProduct = await fs.readFile(
    process.cwd() + '/src/mocks/products.json',
    'utf8',
  );
  const products: Product[] = JSON.parse(fileDataProduct);

  return (
    <main>
      <BannerSection />
      <FlashSalesSection data={products} />
      <hr />
      <CategoriesSection />
      <hr />
      <BestSellerSection data={products.slice(0, 4)} />
      <AdsSection />
      <OurProductSection data={products} />
      <NewArrivalSection />
      <ServicesSection />
    </main>
  );
};

export default HomePage;
