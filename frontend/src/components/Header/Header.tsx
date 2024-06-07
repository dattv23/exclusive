import React from 'react';

import Navbar from './Navbar';
import { Locale } from '@/config';
import TopHeader from './TopHeader';

interface HeaderProps {
  locale: Locale;
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  return (
    <header>
      <TopHeader />
      <Navbar locale={locale} />
    </header>
  );
};

export default Header;
