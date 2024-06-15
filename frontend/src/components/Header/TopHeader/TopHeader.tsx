import { useTranslations } from 'next-intl';

import LocaleSwitcher from '../LocaleSwitcher';
import { Link } from '@/navigation';

const TopHeader = () => {
  const t = useTranslations('TopHeader');

  return (
    <div className="flex w-full items-center justify-between bg-black px-0 text-white lg:px-20">
      <div className="flex w-full justify-center gap-2 font-light">
        <p>
          {t(
            'Summer Sale For All Headphone And Free Express Delivery - OFF 50%!',
          )}
        </p>
        <Link href={'/products'} className="font-semibold">
          {t('Shop now')}
        </Link>
      </div>
      <LocaleSwitcher />
    </div>
  );
};

export default TopHeader;
