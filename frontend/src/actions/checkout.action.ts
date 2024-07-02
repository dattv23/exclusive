'use server';

import { redirect } from 'next/navigation';

import { checkoutSchema } from '@/schemas';

export const checkoutAction = async (data: unknown) => {
  const result = checkoutSchema.safeParse(data);
  if (!result.success) {
    let errorMessage = '';
    result.error.issues.forEach((issue) => {
      errorMessage =
        errorMessage + ': ' + issue.path + ': ' + issue.message + '.';
    });
    return {
      error: errorMessage,
    };
  }

  redirect('/');
};
