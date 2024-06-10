'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Error } from '@/types';
import Input from '../Inputs/Input';
import { SubmitButton } from '@/components/Button';
import { cn, getError } from '@/utils';
import { loginFormAction } from './action';
import { Link } from '@/navigation';

const LoginForm = () => {
  const t = useTranslations('LoginForm');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };

  return (
    <form
      action={(formData) =>
        loginFormAction({ formData, onChangeErrors: setErrors })
      }
      className={cn('mb-10 flex w-full flex-col gap-4', errors && 'gap-2')}
    >
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
      <div className="mt-4 flex items-center justify-between">
        <SubmitButton value="Log In" />
        <Link
          href={'/auth/forgot-password'}
          className="text-error hover:opacity-80"
        >
          {t('Forgot Password?')}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
