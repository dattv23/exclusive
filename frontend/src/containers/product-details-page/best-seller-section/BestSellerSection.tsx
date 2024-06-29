import { ProductList } from '@/components';
import { Product } from '@/types';

type BestSellerSectionProps = {
  data: Product[];
};

const BestSellerSection = (props: BestSellerSectionProps) => {
  const { data } = props;

  return (
    <section className="my-10 flex flex-col gap-6">
      <div>
        <ProductList data={data} />
      </div>
    </section>
  );
};

export default BestSellerSection;
