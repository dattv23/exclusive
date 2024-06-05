import React from 'react';
import { promises as fs } from 'fs';

import { Locale } from '@/config';
import BannerSection from './banner-section';
import FlashSalesSection from './flash-sales-section';
import CategoriesSection from './categories-section';
import BestSellerSection from './best-seller-section/BestSellerSection';
import AdsSection from './ads-section';
import NewArrivalSection from './new-arrival-section';

interface HomePageProps {
  locale: Locale;
}

const HomePage: React.FC<HomePageProps> = async ({ locale }) => {
  const file = await fs.readFile(
    process.cwd() + '/src/mocks/products.json',
    'utf8',
  );
  const products = JSON.parse(file);

  return (
    <main>
      <BannerSection locale={locale} />
      <FlashSalesSection data={products.data} />
      <CategoriesSection />
      <BestSellerSection />
      <AdsSection />
      <NewArrivalSection />
    </main>
  );
};

export default HomePage;
