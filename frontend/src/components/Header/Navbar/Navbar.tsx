'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

import { CartIcon, HeartSmallIcon, UserIcon } from '@/components/Icons';
import { SearchInput } from '@/components/Inputs';
import { AccountDropdown } from '@/components/Dropdown';
import { Link } from '@/navigation';
import { NavItem } from '@/types';
import { useAuthStore } from '@/store';

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');
  const { isAuth } = useAuthStore();

  const items: NavItem[] = [
    {
      id: 0,
      name: t('Home'),
      link: `/`,
    },
    {
      id: 1,
      name: t('Contact'),
      link: `/contact`,
    },
    {
      id: 3,
      name: t('About'),
      link: `/about`,
    },
  ];

  return (
    <nav className="flex h-16 items-center justify-between px-[136px] py-4">
      <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={118}
          height={24}
          className="h-auto w-full"
        />
      </Link>
      <div className="flex h-11 items-center gap-12">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="hover:border-b-2 hover:border-[#727272]"
          >
            {item.name}
          </Link>
        ))}
        {!isAuth && (
          <>
            <Link
              href="/auth/sign-up"
              className="hover:border-b-2 hover:border-[#727272]"
            >
              {t('Sign Up')}
            </Link>
            <Link
              href="/auth/sign-in"
              className="hover:border-b-2 hover:border-[#727272]"
            >
              {t('Sign In')}
            </Link>
          </>
        )}
      </div>
      <SearchInput />
      {isAuth && (
        <div className="flex items-center">
          <Link href={`/wishlist`} className="px-4 py-2">
            <HeartSmallIcon />
          </Link>
          <Link href={`/cart`} className="px-4 py-2">
            <CartIcon />
          </Link>
          <div className="relative inline-flex text-left">
            <div className="group">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-white"
              >
                <UserIcon />
              </button>
              <AccountDropdown />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
