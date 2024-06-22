'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Error } from '@/types';
import { editProfileFormAction } from './action';
import { cn, getError } from '@/utils';
import Input from '../Inputs/Input';
import { Button } from '@/components/Button';

const EditProfileForm = () => {
  const t = useTranslations('Form');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };

  return (
    <form
      action={(formData) =>
        editProfileFormAction({ formData, onChangeErrors: setErrors })
      }
      className={cn(
        'mb-10 flex w-full flex-1 flex-col gap-4',
        errors && 'gap-2',
      )}
    >
      <div className="flex w-full flex-col gap-2 lg:flex-row">
        <Input
          type="text"
          name="firstName"
          id="firstName"
          label={t('First Name')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'firstName')}
        />
        <Input
          type="text"
          name="lastName"
          id="lastName"
          label={t('Last Name')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'lastName')}
        />
      </div>
      <div className="flex w-full flex-col gap-2 lg:flex-row">
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
          name="address"
          id="address"
          label={t('Address')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'address')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          type="password"
          name="currentPassword"
          id="currentPassword"
          label={t('Current Password')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'currentPassword"')}
        />
        <Input
          type="password"
          name="newPassword"
          id="newPassword"
          label={t('New Password')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'newPassword"')}
        />
        <Input
          type="password"
          name="confirmNewPassword"
          id="confirmNewPassword"
          label={t('Confirm New Password')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'confirmNewPassword"')}
        />
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <Button className="bg-white text-black">{t('Cancel')}</Button>
        <Button>{t('Save Changes')}</Button>
      </div>
    </form>
  );
};

export default EditProfileForm;
