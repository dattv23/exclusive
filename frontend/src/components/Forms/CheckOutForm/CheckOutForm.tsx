'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Error } from '@/types';
import { SubmitButton } from '@/components/Button';
import { Input } from '@/components/Inputs';
import { cn, getError } from '@/utils';
import { checkoutFormAction } from './action';

const CheckOutForm = () => {
  const t = useTranslations('CheckOutForm');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };

  return (
    <div className="w-full rounded-lg p-6 ">
      <form
        action={(formData) =>
          checkoutFormAction({ formData, onChangeErrors: setErrors })
        }
        className={cn('mb-14 flex w-full flex-col gap-4', errors && 'gap-5')}
      >
        <Input
          type="text"
          name="firstName"
          id="firstName"
          label={t('FirstName')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'firstName')}
        />
        <Input
          type="text"
          name="companyName"
          id="companyName"
          label={t('CompanyName')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'companyName')}
        />
        <Input
          type="text"
          name="streetAddress"
          id="streetAddress"
          label={t('StreetAddress')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'streetAddress')}
        />
        <Input
          type="text"
          name="city"
          id="city"
          label={t('City')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'city')}
        />
        <Input
          type="text"
          name="apartment"
          id="apartment"
          label={t('Apartment')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'apartment')}
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
          type="text"
          name="yourPhone"
          id="yourPhone"
          label={t('PhoneNumber')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'yourPhone')}
        />
        <SubmitButton text={t('PlaceOrder')} />
      </form>
    </div>
  );
};

export default CheckOutForm;
