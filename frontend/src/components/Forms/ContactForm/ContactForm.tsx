'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Error } from '@/types';
import Input from '../Inputs/Input';
import { SubmitButton } from '@/components/Button';
import { cn, getError } from '@/utils';
import { contactFormAction } from './action';

const ContactForm = () => {
  const t = useTranslations('ContactForm');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };

  return (
    <div className="w-full rounded-lg border p-6 shadow-md md:w-1/2">
      <form
        action={(formData) =>
          contactFormAction({ formData, onChangeErrors: setErrors })
        }
        className={cn('mb-4 grid grid-cols-1 gap-4 md:grid-cols-3')}
      >
        <Input
          type="text"
          name="yourName"
          id="yourName"
          label={t('YourName')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'yourName')}
        />
        <Input
          type="yourEmail"
          name="yourEmail"
          id="yourEmail"
          label={t('YourEmail')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'yourEmail')}
        />
        <Input
          type="yourPhone"
          name="yourPhone"
          id="yourPhone"
          label={t('YourPhone')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'yourPhone')}
        />
      </form>
      <Input
        type="message"
        name="message"
        id="message"
        label={t('Message')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'message')}
      />
      <div className="mt-5 flex items-center justify-between">
        <SubmitButton value="Send Message" />
      </div>
    </div>
  );
};

export default ContactForm;
