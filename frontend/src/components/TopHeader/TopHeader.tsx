import Link from 'next/link';
import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher';

const TopHeader = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between bg-black px-0 text-white lg:px-20">
        <div className="flex w-full justify-center gap-2 font-light">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href={'/'} className="font-semibold">
            Shop now
          </Link>
        </div>
        <LocaleSwitcher />
      </div>
    </>
  );
};

export default TopHeader;
