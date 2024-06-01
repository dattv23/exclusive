import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

import {
  CancelIcon,
  LogoutIcon,
  ReviewIcon,
  ShoppingBagIcon,
  UserIcon,
} from '../Icons';
import { Locale } from '@/config';

interface AccountDropdownProps {
  locale: Locale;
}

type DropdownItem = {
  id: number;
  href: string;
  icon: React.ReactNode;
  name: string;
};

const AccountDropdown: React.FC<AccountDropdownProps> = ({ locale }) => {
  const t = useTranslations('Navbar');

  const items: DropdownItem[] = [
    {
      id: 1,
      href: `${locale}/account`,
      icon: <UserIcon />,
      name: t('Manage My Account'),
    },
    {
      id: 2,
      href: `${locale}/orders`,
      icon: <ShoppingBagIcon />,
      name: t('My Order'),
    },
    {
      id: 3,
      href: `${locale}/cancels`,
      icon: <CancelIcon />,
      name: t('My Cancellations'),
    },
    {
      id: 4,
      href: `${locale}/reviews`,
      icon: <ReviewIcon />,
      name: t('My Reviews'),
    },
  ];

  return (
    <div className="invisible absolute right-0 z-50 -mt-1 w-64 origin-top-left divide-y divide-gray-100 rounded-md bg-white opacity-0 shadow-lg transition duration-300 group-hover:visible group-hover:opacity-100">
      <div className="py-1">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <span className="h-6 w-6">{item.icon}</span>
            <span className="font-semibold">{item.name}</span>
          </Link>
        ))}
        <button className="flex w-full items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
          <LogoutIcon />
          <span>{t('Logout')}</span>
        </button>
      </div>
    </div>
  );
};

export default AccountDropdown;
