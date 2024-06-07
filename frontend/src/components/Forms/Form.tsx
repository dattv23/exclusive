/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input as TInput } from '@/types';
import Input from './Inputs/Input';

interface FormProps {
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  fields: TInput[];
  onSubmit: (values: any) => void;
}

const Form = ({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
}: FormProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const getError = (name: string): string | undefined => {
    const error = formik.errors[name];
    if (typeof error === 'string') {
      return error;
    }
    return undefined;
  };

  const getTouched = (name: string): boolean => {
    const touched = formik.touched[name];
    if (typeof touched === 'boolean') {
      return touched;
    }
    return false;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-5">
        {fields.map((item) => (
          <Input
            key={item.name}
            name={item.name}
            type={item.type}
            label={item.label}
            placeholder={item.placeholder}
            value={formik.values[item.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getError(item.name)}
            touched={getTouched(item.name)}
          />
        ))}
      </div>

      <button
        className="w-full rounded-lg bg-green-600 px-4 py-2 text-white disabled:bg-opacity-65"
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Loading' : 'Submit'}
      </button>
    </form>
  );
};

export default Form;
