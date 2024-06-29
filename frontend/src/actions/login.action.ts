'use server';

import { redirect } from 'next/navigation';

import { loginSchema, TLoginResponse } from '@/schemas';
import { envServerConfig } from '@/libs/env';
import { cookies } from 'next/headers';
import { Role } from '@/config';

export const loginAction = async (data: unknown) => {
  // server-side validation
  const result = loginSchema.safeParse(data);
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

  const res = await fetch(`${envServerConfig.DOMAIN}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(result.data),
  });
  const loginRes = await res.json();
  if (loginRes.status !== 200) {
    return {
      error: 'Login failed',
    };
  }
  const { token, role, expiresIn } = loginRes.data as TLoginResponse;
  const cookieStore = cookies();
  cookieStore.set('accessToken', token, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    expires: expiresIn,
  });
  if (role === Role.ADMIN) {
    redirect('/admin');
  }
  redirect('/');
};
