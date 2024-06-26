import dynamic from 'next/dynamic';
import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

import LoadingPage from '@/containers/loading-page';
import { Locale } from '@/config';

const SignInPage = dynamic(() => import('@/containers/auth-page/signin-page'), {
  loading: () => <LoadingPage />,
});

type SignInProps = {
  params: {
    locale: Locale;
  };
};

const SignIn: React.FC<SignInProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  return <SignInPage />;
};

export default SignIn;
