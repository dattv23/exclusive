'use client';

import toast from 'react-hot-toast';

import { registerAction } from '@/actions';
import { Error, RegisterSchema } from '@/types';

type TParams = {
  formData: FormData;
  onChangeErrors: React.Dispatch<React.SetStateAction<Error[]>>;
};

export const registerFormAction = async (params: TParams) => {
  const { formData, onChangeErrors } = params;

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // client-side validation
  const result = RegisterSchema.safeParse(data);
  if (!result.success) {
    const newErrors: Error[] = result.error.issues.map((issue) => ({
      key: issue.path[0], // Use the path as the key
      message: issue.message, // Add a message property to store the error message
    }));
    onChangeErrors(newErrors);
    return;
  }
  const res = await registerAction(result.data);
  if (res?.error) {
    toast.error(res.error);
  }
};
