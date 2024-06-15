import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { RegisterForm } from '@/components/Forms';

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const t = useTranslations('SignUpPage');
  return (
    <main className="flex gap-4 py-2 lg:py-8">
      <div className="flex items-start justify-center lg:flex-[0.8]">
        <Image
          src={'/images/shopping.jpg'}
          alt="shopping"
          width={919}
          height={800}
          className="h-auto w-min object-cover"
        />
      </div>
      <div className="flex-col gap-2 py-2 lg:flex-[0.5] lg:py-10">
        <h3>{t('Create an account')}</h3>
        <p>{t('Enter your details below')}</p>
        <RegisterForm />
      </div>
    </main>
  );
};

export default SignUpPage;
