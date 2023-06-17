import MainLayout from '../layouts/MainLayout';
import CategoryItem from '../components/CategoryItem';
import categories from '../data/categories.json';

export default function Home() {
  return (
    <MainLayout>
      <div className="mb-3">
        <h2 className="text-primary">Categories</h2>
      </div>
      <div className="d-flex flex-column gap-3">
        {categories.map((category) => (
          <CategoryItem key={category.id} item={category} />
        ))}
      </div>
    </MainLayout>
  );
}
