import { AccountNavbar } from '@/components/Navbar';

type AccountLayoutProps = {
  children: React.ReactNode;
};

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-4 py-16">
      <div className="w-80">
        <AccountNavbar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AccountLayout;
