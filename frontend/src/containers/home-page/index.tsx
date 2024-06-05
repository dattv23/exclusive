import React from 'react';

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

const HomePage: React.FC<HomePageProps> = ({ locale }) => {
  return (
    <main>
      <BannerSection locale={locale} />
      <FlashSalesSection />
      <CategoriesSection />
      <BestSellerSection />
      <AdsSection />
      <NewArrivalSection />
    </main>
  );
};

export default HomePage;
