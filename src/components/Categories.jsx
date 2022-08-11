import CategoryItem from './CategoryItem'
import categories from '../data/categories.json'

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
