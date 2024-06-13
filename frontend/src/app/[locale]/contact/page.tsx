import dynamic from 'next/dynamic';
import React from 'react';

import LoadingPage from '@/containers/loading-page';
import { Locale } from '@/config';
import { unstable_setRequestLocale } from 'next-intl/server';

const ContactPage = dynamic(() => import('@/containers/contact-page'), {
  loading: () => <LoadingPage />,
});

type ContactPageProps = {
  params: {
    locale: Locale;
  };
};

const Contact: React.FC<ContactPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  return <ContactPage />;
};

export default Contact;
