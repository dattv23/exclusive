import React from 'react';
import TopHeader from '../TopHeader';
import Navbar from '../Navbar';
import Search from '../Search';
import WishList from '../WishList';
import Cart from '../Cart';

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
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
