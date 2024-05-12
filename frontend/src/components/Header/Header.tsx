import React from 'react';
import TopHeader from '../TopHeader';
import Navbar from '../Navbar';
import Search from '../Search';
import WishList from '../WishList';

const Header = () => {
  return (
    <header>
      <TopHeader />
      <div>
        <div>Exclusive</div>
        <Navbar />
        <Search />
        <div>
          <WishList />
        </div>
      </div>
    </header>
  );
};

export default Header;
