import { Locale } from '@/config';
import HomePage from '@/containers/home-page';
// import { useTranslations } from 'next-intl';
import React from 'react';

interface HomeProps {
  params: { locale: Locale };
}

const Home: React.FC<HomeProps> = ({ params }) => {
  const { locale } = params;
  return <HomePage locale={locale} />;
};

export default Home;
