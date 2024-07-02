'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { CartItem, Error } from '@/types';
import { Input } from '@/components/Inputs';
import { checkoutFormAction } from './action';
import { ApplyCouponForm } from '@/components';
import { SubmitButton } from '@/components/Button';
import { CheckOutTable } from '@/components/Tables';
import { calculateDiscountedPrice, cn, getError } from '@/lib/utils';

type CheckOutFormProps = {
  data: CartItem[];
};

const CheckOutForm: React.FC<CheckOutFormProps> = ({ data }) => {
  const t = useTranslations('CheckOutForm');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };
  const subtotal = data.reduce(
    (pre, cur) =>
      pre +
      calculateDiscountedPrice(
        cur.product.regularPrice,
        cur.product?.discount ?? 0,
      ) *
        cur.quantity,
    0,
  );
  return (
    <div className="w-full rounded-lg p-6 ">
      <form
        action={(formData) =>
          checkoutFormAction({ formData, onChangeErrors: setErrors })
        }
        className={cn('flex w-full flex-col gap-2', errors && 'gap-3')}
      >
        <div className="flex justify-between ">
          <div className="w-full max-w-md space-y-4">
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
              name="lastName"
              id="lastName"
              label={t('LastName')}
              onChange={(e) => handleChangeInput(e)}
              error={getError(errors, 'lastName')}
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
          </div>
          <div className="w-full max-w-md">
            <CheckOutTable data={data} />
            <div className="mt-6">
              <div className=" flex flex-col gap-4">
                <div className="flex justify-between">
                  <p>{t('Subtotal')}</p>
                  <p>{`${subtotal}$`}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>{t('Shipping')}</p>
                  <p>FREE</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>{t('Total')}</p>
                  <p>{`${subtotal}$`}</p>
                </div>
              </div>
              <div className="mt-8">
                <div className="mt-4 space-y-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="payment-method"
                      className="h-4 w-4 border-zinc-300 text-red-600"
                    />
                    <label
                      htmlFor="bank"
                      className="ml-2 block text-sm text-zinc-900"
                    >
                      {t('Bank')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="payment-method"
                      className="h-4 w-4 border-zinc-300 text-red-600"
                      defaultChecked
                    />
                    <label
                      htmlFor="cash-on-delivery"
                      className="ml-2 block text-sm text-zinc-900"
                    >
                      {t('Cash on delivery')}
                    </label>
                  </div>
                </div>
              </div>
              <SubmitButton className="my-12" text={t('PlaceOrder')} />
            </div>
          </div>
        </div>
      </form>
      <div className="w-full max-w-md">
        <ApplyCouponForm />
      </div>
    </div>
  );
};

export default CheckOutForm;
