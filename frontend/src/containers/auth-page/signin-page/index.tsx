import { LoginForm } from '@/components/Forms';
import React from 'react';

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default SignInPage;
