import { useTranslations } from 'next-intl';
import React from 'react';

const Home = () => {
  const t = useTranslations('Index');
  return (
    <div>
      <p>{t('title')}</p>
    </div>
  );
};

export default Home;
