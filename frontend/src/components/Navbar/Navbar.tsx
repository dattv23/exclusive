import { Locale } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Search from '../Search';
import Icon from '../Icon';
import { useTranslations } from 'next-intl';

interface NavbarProps {
  locale: Locale;
}

type NavItem = {
  id: number;
  name: string;
  link: string;
};

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
    <nav className="flex h-11 items-center justify-between px-[136px] py-4">
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
          <Icon src="icons/heart-small.svg" alt="heart-small-icon" />
        </Link>
        <Link href={`${locale}/cart`} className="px-4 py-2">
          <Icon src="icons/cart.svg" alt="cart-icon" />
        </Link>
        <div className="relative inline-flex text-left">
          <div className="group">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-white"
            >
              <Icon src="icons/user.svg" alt="user-icon" />
            </button>

            <div className="invisible absolute right-0 -mt-1 w-64 origin-top-left divide-y divide-gray-100 rounded-md bg-white opacity-0 shadow-lg transition duration-300 group-hover:visible group-hover:opacity-100">
              <div className="py-1">
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Icon src="icons/user.svg" alt="user-icon" />
                  <span>{t('Manage My Account')}</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Icon src="icons/shopping-bag.svg" alt="shopping-bag-icon" />
                  <span>{t('My Order')}</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Icon src="icons/cancel.svg" alt="cancel-icon" />
                  <span>{t('My Cancellations')}</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Icon src="icons/star-no-filled.svg" alt="star-icon" />
                  <span>{t('My Reviews')}</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Icon src="icons/logout.svg" alt="logout-icon" />
                  <span>{t('Logout')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
