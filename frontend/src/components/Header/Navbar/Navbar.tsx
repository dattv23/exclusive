'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { CartIcon, HeartSmallIcon, UserIcon } from '@/components/Icons';
import { SearchInput } from '@/components/Inputs';
import { AccountDropdown } from '@/components/Dropdown';
import { Link, usePathname } from '@/navigation';
import { NavItem } from '@/types';
import { useAuthStore, useCartStore } from '@/store';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');
  const { isAuth } = useAuthStore();
  const { count } = useCartStore();
  const pathName = usePathname();

  const items: NavItem[] = [
    {
      id: 0,
      name: t('Home'),
      link: `/`,
    },
    {
      id: 0,
      name: t('Product'),
      link: `/products`,
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
        {items.map((item, id) => (
          <Link
            key={id}
            href={item.link}
            className={cn(
              'hover:border-b-2 hover:border-[#727272]',
              pathName === item.link && 'text-secondary hover:border-secondary',
            )}
          >
            {item.name}
          </Link>
        ))}
        {!isAuth && (
          <>
            <Link
              href="/auth/sign-up"
              className={cn(
                'hover:border-b-2 hover:border-[#727272]',
                pathName === '/auth/sign-up' &&
                  'text-secondary hover:border-secondary',
              )}
            >
              {t('Sign Up')}
            </Link>
            <Link
              href="/auth/sign-in"
              className={cn(
                'hover:border-b-2 hover:border-[#727272]',
                pathName === '/auth/sign-in' &&
                  'text-secondary hover:border-secondary',
              )}
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
          <Link href={`/cart`} className="relative px-4 py-2">
            <CartIcon />
            {count() > 0 && (
              <span className="absolute -top-1 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                {count()}
              </span>
            )}
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
