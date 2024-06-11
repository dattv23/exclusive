'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Error } from '@/types';
import Input from '../Inputs/Input';
import { SubmitButton } from '@/components/Button';
import { cn, getError } from '@/utils';
import { registerFormAction } from './action';
import { Link } from '@/navigation';

const RegisterForm = () => {
  const t = useTranslations('RegisterForm');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };

  return (
    <form
      action={(formData) =>
        registerFormAction({ formData, onChangeErrors: setErrors })
      }
      className={cn('mb-10 flex w-full flex-col gap-4', errors && 'gap-2')}
    >
      <Input
        type="text"
        name="name"
        id="name"
        label={t('Name')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'name')}
      />
      <Input
        type="text"
        name="email"
        id="email"
        label={t('Email')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'email')}
      />
      <Input
        type="password"
        name="password"
        id="password"
        label={t('Password')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'password')}
      />
      <div className="mb-10 flex w-full flex-col gap-4">
        <SubmitButton value="Create account" />
      </div>
      <div className="mt-5 flex items-right  justify-center">
      <text>Already have account?</text>
      <Link
          href={'/auth/sign-in'}
          className="text-error hover:opacity-80"
        >
          {t('Log in')}
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
