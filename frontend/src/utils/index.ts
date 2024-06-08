import { Error } from '@/types';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://127.0.0.1:3000';
};

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export const replaceColor = (svgString: string, newColor: string) => {
  const regex = /fill="#[A-Fa-f0-9]{6}"/g;
  const replacement = `fill="var(${newColor})"`;
  return svgString.toString().replace(regex, replacement);
};

export const startScore = (rate: number) => {
  return '⭐⭐⭐⭐⭐⚝⚝⚝⚝⚝'.slice(5 - rate, 10 - rate);
};

// Helper function to create a timeout promise
export const promiseTimeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getError = (errors: Error[], field: string) => {
  return errors.find((item) => item.key == field);
};
