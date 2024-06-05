import Banner from '@/components/Banner';
import { Locale } from '@/config';
// import { useTranslations } from 'next-intl';
import React from 'react';

interface HomeProps {
  params: { locale: Locale };
}

const Home: React.FC<HomeProps> = ({ params }) => {
  const { locale } = params;
  // const t = useTranslations('Index');
  return (
    <main>
      <Banner locale={locale} />
    </main>
  );
};

export default Home;
