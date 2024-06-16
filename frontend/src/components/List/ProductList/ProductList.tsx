import { ProductCard } from '@/components/Card';
import { Product } from '@/types';

type ProductListProps = {
  data: Product[];
};

const ProductList = (props: ProductListProps) => {
  const { data } = props;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductList;
