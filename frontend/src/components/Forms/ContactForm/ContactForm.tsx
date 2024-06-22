'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Error } from '@/types';
import Input from '../Inputs/Input';
import { SubmitButton } from '@/components/Button';
import { cn, getError } from '@/utils';
import { contactFormAction } from './action';
import TextArea from '../TextAreas/TextArea';

const ContactForm = () => {
  const t = useTranslations('ContactForm');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name));
  };

  return (
    <div className="w-full rounded-lg border p-6 shadow-md md:w-3/4">
      <form
        action={(formData) =>
          contactFormAction({ formData, onChangeErrors: setErrors })
        }
        className={cn('mb-4 grid grid-cols-1 gap-4 md:grid-cols-3')}
      >
        <Input
          type="text"
          name="name"
          id="name"
          label={t('YourName')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'name')}
        />
        <Input
          type="email"
          name="email"
          id="email"
          label={t('YourEmail')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'email')}
        />
        <Input
          type="text"
          name="phone"
          id="phone"
          label={t('YourPhone')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'phone')}
        />
      </form>
      <TextArea
        name="message"
        id="message"
        label={t('Message')}
        onChange={(e) => handleChangeTextArea(e)}
        error={getError(errors, 'message')}
        rows={8}
      />
      <div className="mt-5 flex items-center justify-end">
        <SubmitButton value="Send Message" />
      </div>
    </div>
  );
};

export default ContactForm;
