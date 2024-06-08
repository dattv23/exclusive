'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { Spin } from 'antd';

import Button from '../Button';

interface SubmitButtonProps {
  value: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { value } = props;
  const { pending } = useFormStatus();
  const t = useTranslations('Button');

  return (
    <Button type="submit" disabled={pending}>
      <p>
        {t(value)} {pending && <Spin />}
      </p>
    </Button>
  );
};

export default SubmitButton;
