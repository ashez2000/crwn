import { useRouter } from 'next/router';

import MainLayout from '../../layouts/MainLayout';
import Product from '../../components/Product';
import products from '../../data/products.json';

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <MainLayout>
      <div className="mb-3">
        <h2 className="text-primary">{category}</h2>
      </div>
      <div className="row row-cols-3 g-3">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <div className="col" key={product.id}>
              <Product product={product} />
            </div>
          ))}
      </div>
    </MainLayout>
  );
}
