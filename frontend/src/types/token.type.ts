import { Role } from '@/config';

export type TokenPayload = {
  role: Role;
  userId: string;
  sub: string;
  iat: number;
  exp: number;
};
