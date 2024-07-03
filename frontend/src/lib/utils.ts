import { EXCHANGE_RATE, Locale, Locales } from '@/config';
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

export const calculateDiscountedPrice = (
  price: number,
  discount: number,
): number => {
  return price - price * (discount / 100);
};

export const formatPrice = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

export const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Conversion functions
export function usdToVnd(usdAmount: number, exchangeRate: number) {
  const vndAmount = usdAmount * exchangeRate;
  return VND.format(Math.round(vndAmount));
}

export function vndToUsd(vndAmount: number, exchangeRate: number) {
  const usdAmount = vndAmount / exchangeRate;
  return USDollar.format(usdAmount);
}

export const convertPriceByLocale = (price: number, locale: Locale) => {
  switch (locale) {
    case Locales.VI:
      return VND.format(price);
    case Locales.EN:
      return vndToUsd(price, EXCHANGE_RATE);
    default:
      break;
  }
};
