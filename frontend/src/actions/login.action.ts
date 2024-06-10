'use server';

import { redirect } from 'next/navigation';

import { LoginSchema } from '@/types';
import { promiseTimeout } from '@/utils';

export const loginAction = async (data: unknown) => {
  // server-side validation
  const result = LoginSchema.safeParse(data);
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
