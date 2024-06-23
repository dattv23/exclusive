'use server';

import { redirect } from 'next/navigation';

import { checkoutSchema } from '@/schemas';
import { promiseTimeout } from '@/utils';

export const checkoutAction = async (data: unknown) => {
  // server-side validation
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

  await promiseTimeout(3000);

  redirect('/');
};
