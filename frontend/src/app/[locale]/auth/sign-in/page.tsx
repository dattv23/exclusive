import dynamic from 'next/dynamic';
import React from 'react';

import LoadingPage from '@/containers/loading-page';

const SignInPage = dynamic(() => import('@/containers/auth-page/signin-page'), {
  loading: () => <LoadingPage />,
});

const SignIn: React.FC = () => {
  return <SignInPage />;
};

export default SignIn;
