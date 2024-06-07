import { Locale } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Search from '../../Search';
import { useTranslations } from 'next-intl';
import AccountDropdown from '../../Dropdown/AccountDropdown';
import { CartIcon, HeartSmallIcon, UserIcon } from '../../Icons';
import { NavItem } from '@/types';

interface NavbarProps {
  locale: Locale;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations('Navbar');

  const items: NavItem[] = [
    {
      id: 0,
      name: t('Home'),
      link: `${locale}/home`,
    },
    {
      id: 1,
      name: t('Contact'),
      link: `${locale}/contact`,
    },
    {
      id: 3,
      name: t('About'),
      link: `${locale}/about`,
    },
    {
      id: 4,
      name: t('Sign Up'),
      link: `${locale}/auth/sign-up`,
    },
    {
      id: 5,
      name: t('Sign In'),
      link: `${locale}/auth/sign-in`,
    },
  ];
  return (
    <nav className="flex h-16 items-center justify-between px-[136px] py-4">
      <Link href={'/'}>
        <Image src={'/images/logo.png'} alt="logo" width={118} height={24} />
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
      </div>
      <Search />
      <div className="flex items-center">
        <Link href={`${locale}/wishlist`} className="px-4 py-2">
          <HeartSmallIcon />
        </Link>
        <Link href={`${locale}/cart`} className="px-4 py-2">
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
            <AccountDropdown locale={locale} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
