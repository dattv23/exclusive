import dynamic from 'next/dynamic';
import React from 'react';

import LoadingPage from '@/containers/loading-page';

const SignUpPage = dynamic(() => import('@/containers/auth-page/signup-page'), {
  loading: () => <LoadingPage />,
});

const SignUp: React.FC = () => {
  return <SignUpPage />;
};

export default SignUp;
