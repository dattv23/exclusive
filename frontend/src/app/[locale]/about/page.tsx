import dynamic from 'next/dynamic';
import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import LoadingPage from '@/containers/loading-page';
import { Locale } from '@/config';

const AboutPage = dynamic(() => import('@/containers/about-page'), {
  loading: () => <LoadingPage />,
});

type AboutPageProps = {
  params: {
    locale: Locale;
  };
};

const About: React.FC<AboutPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  return <AboutPage />;
};

export default About;
