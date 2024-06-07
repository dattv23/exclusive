/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input as TInput } from '@/types';
import React from 'react';

interface FormikInputProps extends TInput {
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  error?: string;
  touched?: boolean;
}

const Input: React.FC<FormikInputProps> = ({
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full rounded-lg border px-3 py-2 ${
          error && touched ? 'border-red-600' : 'border-gray-300'
        }`}
      />
      {error && touched ? (
        <div className="mt-1 text-red-600">{error}</div>
      ) : null}
    </div>
  );
};

export default Input;
