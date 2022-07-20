import CategoryItem from '../category-item/category-item.component'
import categories from '../../data/categories'

const Directory = () => {
  return (
    <section>
      <div className="row">
        <div className="col-4">
          <CategoryItem category={categories[0]} />
        </div>
        <div className="col-4">
          <CategoryItem category={categories[1]} />
        </div>
        <div className="col-4">
          <CategoryItem category={categories[2]} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <CategoryItem category={categories[3]} />
        </div>
        <div className="col-6">
          <CategoryItem category={categories[4]} />
        </div>
      </div>
    </section>
  )
}

export default Directory
