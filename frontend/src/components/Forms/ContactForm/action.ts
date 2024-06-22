'use client';

import toast from 'react-hot-toast';

import { contactAction } from '@/actions';
import { Error, ContactSchema } from '@/types';

type TParams = {
  formData: FormData;
  onChangeErrors: React.Dispatch<React.SetStateAction<Error[]>>;
};

export const contactFormAction = async (params: TParams) => {
  const { formData, onChangeErrors } = params;

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  // client-side validation
  const result = ContactSchema.safeParse(data);
  if (!result.success) {
    const newErrors: Error[] = result.error.issues.map((issue) => ({
      key: issue.path[0], // Use the path as the key
      message: issue.message, // Add a message property to store the error message
    }));
    onChangeErrors(newErrors);
    return;
  }
  const res = await contactAction(result.data);
  if (res?.error) {
    toast.error(res.error);
  }
};
