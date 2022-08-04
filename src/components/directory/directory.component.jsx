import CategoryItem from '../category-item/category-item.component'
import categories from '../../data/categories'

const Directory = () => {
  return (
    <div className="flex flex-col space-y-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory
