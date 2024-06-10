import dynamic from 'next/dynamic';
import React from 'react';

const AccountPage = dynamic(() => import('@/containers/account-page'));

const Account: React.FC = () => {
  return <AccountPage />;
};

export default Account;
