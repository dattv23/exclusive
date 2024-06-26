'use client';

import toast from 'react-hot-toast';

import { checkoutAction } from '@/actions';
import { Error } from '@/types';
import { checkoutSchema } from '@/schemas';

type TParams = {
  formData: FormData;
  onChangeErrors: React.Dispatch<React.SetStateAction<Error[]>>;
};

export const checkoutFormAction = async (params: TParams) => {
  const { formData, onChangeErrors } = params;

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    streetAddress: formData.get('streetAddress'),
    city: formData.get('city'),
    apartment: formData.get('apartment'),
    email: formData.get('email'),
    yourPhone: formData.get('yourPhone'),
  };

  const result = checkoutSchema.safeParse(data);
  if (!result.success) {
    const newErrors: Error[] = result.error.issues.map((issue) => ({
      key: issue.path[0],
      message: issue.message,
    }));
    onChangeErrors(newErrors);
    return;
  }
  const res = await checkoutAction(result.data);
  if (res?.error) {
    toast.error(res.error);
  }
  toast.success('Place order successful');
};
