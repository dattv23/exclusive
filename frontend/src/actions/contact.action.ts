'use server';

import { redirect } from 'next/navigation';

import { ContactSchema } from '@/types';
import { promiseTimeout } from '@/utils';

export const contactAction = async (data: unknown) => {
  // server-side validation
  const result = ContactSchema.safeParse(data);
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
