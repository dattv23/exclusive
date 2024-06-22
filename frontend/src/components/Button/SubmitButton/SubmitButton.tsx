'use client';

import { useFormStatus } from 'react-dom';
import { Spin } from 'antd';

import Button from '../Button';

type SubmitButtonProps = {
  text: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {!pending ? (
        text
      ) : (
        <p>
          <Spin /> Loading...
        </p>
      )}
    </Button>
  );
};

export default SubmitButton;
