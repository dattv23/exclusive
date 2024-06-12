import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { RegisterForm } from '@/components/Forms';

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const t = useTranslations('SignUpPage');
  return (
    <main className="flex gap-10 py-2 lg:py-14">
      <div className="hidden flex-[0.6] lg:flex">
        <Image
          src={'/images/shopping.jpg'}
          alt="shopping"
          width={919}
          height={100}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 py-2 lg:flex-[0.4] lg:py-20">
        <h3>{t('Create an account')}</h3>
        <p>{t('Enter your details below')}</p>
        <RegisterForm />
      </div>
    </main>
  );
};

export default SignUpPage;
