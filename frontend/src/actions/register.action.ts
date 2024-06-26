'use server';

import { redirect } from 'next/navigation';

import { promiseTimeout } from '@/utils';
import { registerSchema } from '@/schemas';

export const registerAction = async (data: unknown) => {
  // server-side validation
  const result = registerSchema.safeParse(data);
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
