import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { LoginForm } from '@/components/Forms';

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  const t = useTranslations('SignInPage');
  return (
    <main className="flex gap-10 py-2 lg:py-14">
      <div className="hidden flex-[0.6] lg:flex">
        <Image
          src={'/images/shopping.jpg'}
          alt="shopping"
          width={919}
          height={756}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 py-2 lg:flex-[0.4] lg:py-20">
        <h3>{t('Log in to Exclusive')}</h3>
        <p>{t('Enter your details below')}</p>
        <LoginForm />
      </div>
    </main>
  );
};

export default SignInPage;
