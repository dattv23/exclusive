'use client';

import React, { useState } from 'react';
import { Alert } from 'antd';

import { Error } from '@/types';
import Input from '../Inputs/Input';
import { SubmitButton } from '@/components/Button';
import { cn, getError } from '@/utils';
import { loginFormAction } from './action';
import { useTranslations } from 'next-intl';

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
      className={cn(
        'my-10 flex w-full flex-col gap-4 md:w-1/2',
        errors && 'gap-2',
      )}
    >
      <Input
        type="text"
        name="email"
        id="email"
        label={t('Email')}
        onChange={(e) => handleChangeInput(e)}
      />
      {getError(errors, 'email') && (
        <Alert
          type="error"
          message={getError(errors, 'email')?.message}
          showIcon
        />
      )}
      <Input
        type="password"
        name="password"
        id="password"
        label={t('Password')}
        onChange={(e) => handleChangeInput(e)}
      />
      {getError(errors, 'password') && (
        <Alert
          type="error"
          message={getError(errors, 'password')?.message}
          showIcon
        />
      )}
      <SubmitButton value="Log In" />
    </form>
  );
};

export default LoginForm;
