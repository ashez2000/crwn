import CategoryItem from '@/components/category/CategoryItem'

const categories = ['hats', 'jackets', 'sneakers', 'womens', 'mens']

export default function Home() {
  return (
    <div>
      <div className="d-grid gap-3">
        <div className="row row-cols-3">
          <CategoryItem title={categories[0]} />
          <CategoryItem title={categories[1]} />
          <CategoryItem title={categories[2]} />
        </div>

        <div className="row row-cols-2">
          <CategoryItem title={categories[3]} size="lg" />
          <CategoryItem title={categories[4]} size="lg" />
        </div>
      </div>
    </div>
  )
}
