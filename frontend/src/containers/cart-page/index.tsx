import { promises as fs } from 'fs';

import { Cart } from '@/types';
import { CartTable } from '@/components/Tables';
import { ApplyCouponForm, Button } from '@/components';
import { calculateDiscountedPrice } from '@/utils';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';

const CartPage: React.FC = async () => {
  const fileDataCart = await fs.readFile(
    process.cwd() + '/src/mocks/cart.json',
    'utf8',
  );
  const itemsList: Cart[] = JSON.parse(fileDataCart);
  const t = await getTranslations('CartPage');
  const subtotal = itemsList.reduce(
    (pre, cur) =>
      pre +
      calculateDiscountedPrice(cur.product.price, cur.product.discount) *
        cur.quantity,
    0,
  );

  return (
    <main className="py-10">
      <CartTable data={itemsList} />
      <div className="mt-8 flex flex-1 justify-between">
        <div className="flex-[0.4]">
          <ApplyCouponForm />
        </div>
        <div className="flex flex-[0.4] flex-col gap-8 rounded-md border-2 border-black px-6 py-8">
          <h4>{t('Cart Total')}</h4>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>{t('Subtotal')}</p>
              <p>{`${subtotal}$`}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>{t('Shipping')}</p>
              <p>FREE</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>{t('Total')}</p>
              <p>{`${subtotal}$`}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button>
              <Link href={'/checkout'}>{t('Process to checkout')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
