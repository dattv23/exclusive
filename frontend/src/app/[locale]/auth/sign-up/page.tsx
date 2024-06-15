import dynamic from 'next/dynamic';
import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import LoadingPage from '@/containers/loading-page';
import { Locale } from '@/config';

const SignUpPage = dynamic(() => import('@/containers/auth-page/signup-page'), {
  loading: () => <LoadingPage />,
});

type SignUpProps = {
  params: {
    locale: Locale;
  };
};

const SignUp: React.FC<SignUpProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  return <SignUpPage />;
};

export default SignUp;
