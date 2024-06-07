'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import { Login as TLogin } from '@/types';
const Form = dynamic(() => import('../Form'), {
  ssr: false,
});
import { LoginSchema } from './validation';

const LoginForm = () => {
  const initialValues: TLogin = {
    email: '',
    password: '',
  };
  const fields = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
    },
  ];
  const handleSubmit = (values: TLogin) => {
    console.log('====================================');
    console.log(values);
    console.log('====================================');
  };
  return (
    <Form
      initialValues={initialValues}
      fields={fields}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginForm;
