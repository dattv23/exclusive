import React from 'react';
import TopHeader from '../TopHeader';
import Navbar from '../Navbar';
import { Locale } from '@/config';

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
