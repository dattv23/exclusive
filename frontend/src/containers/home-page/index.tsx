import dynamic from 'next/dynamic';
import React from 'react';
import { promises as fs } from 'fs';

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
const NewArrivalSection = dynamic(
  () => import('@/containers/home-page/new-arrival-section'),
);

const HomePage: React.FC = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/mocks/products.json',
    'utf8',
  );
  const products = JSON.parse(file);

  return (
    <main>
      <BannerSection />
      <FlashSalesSection data={products.data} />
      <CategoriesSection />
      <BestSellerSection />
      <AdsSection />
      <NewArrivalSection />
    </main>
  );
};

export default HomePage;
