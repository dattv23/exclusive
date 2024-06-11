'use server';

import { redirect } from 'next/navigation';

import { RegisterSchema } from '@/types';
import { promiseTimeout } from '@/utils';

export const registerAction = async (data: unknown) => {
  // server-side validation
  const result = RegisterSchema.safeParse(data);
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
