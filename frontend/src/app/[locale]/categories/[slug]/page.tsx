import dynamic from 'next/dynamic';

import { envServerConfig } from '@/lib/envServer';
import { Category as TCategory } from '@/types';

const CategoryPage = dynamic(() => import('@/containers/category-page'));

type CategoryProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const res = await fetch(
    `${envServerConfig.DOMAIN_API}/api/v1/categories`,
  ).then((res) => res.json());

  return res.data.map((category: TCategory) => ({
    slug: category.slug,
  }));
}

const Category: React.FC<CategoryProps> = ({ params }) => {
  return <CategoryPage slug={params.slug} />;
};

export default Category;
